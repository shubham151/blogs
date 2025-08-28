// components/BlogDetail/hooks/useBlogDetail.js
import { useState, useEffect } from "react";
import { blogApi } from "../../../core/Api";
import { BLOG_DETAIL_CONFIG } from "../BlogDetailConstants";

export const useBlogDetail = (postId) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!postId) {
        setError("No post ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch the specific post
        const postData = await blogApi.getPost(postId);
        setPost(postData);

        // Fetch related posts (excluding current post)
        const relatedData = await blogApi.getPosts({
          per_page: BLOG_DETAIL_CONFIG.content.relatedPostsCount,
          exclude: postId,
        });
        setRelatedPosts(relatedData);
      } catch (err) {
        setError(err.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [postId]);

  return {
    post,
    relatedPosts,
    loading,
    error,
  };
};
