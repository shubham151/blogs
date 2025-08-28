import { useState, useEffect, useMemo } from "react";
import { blogApi } from "../../../core/Api";
import {
  filterPosts,
  sortPosts,
  getFeaturedPosts,
  getAllPosts,
  paginatePosts,
} from "../blogUtils";
import { BLOG_CONFIG } from "../BlogConstants";

export const useBlogData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await blogApi.getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Memoized filtered and sorted posts
  const processedPosts = useMemo(() => {
    const filtered = filterPosts(posts, searchTerm);
    return sortPosts(filtered, sortBy);
  }, [posts, searchTerm, sortBy]);

  // Memoized featured posts
  const featuredPosts = useMemo(() => {
    return getFeaturedPosts(
      processedPosts,
      BLOG_CONFIG.pagination.featuredCount
    );
  }, [processedPosts]);

  // Memoized all posts (non-featured)
  const allPosts = useMemo(() => {
    return getAllPosts(processedPosts, BLOG_CONFIG.pagination.featuredCount);
  }, [processedPosts]);

  // Memoized pagination data
  const paginationData = useMemo(() => {
    return paginatePosts(
      allPosts,
      currentPage,
      BLOG_CONFIG.pagination.itemsPerPage
    );
  }, [allPosts, currentPage]);

  // Event handlers
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    posts,
    loading,
    error,
    searchTerm,
    sortBy,
    currentPage,
    featuredPosts,
    allPosts,
    ...paginationData,
    handleSearch,
    handleSortChange,
    handlePageChange,
  };
};
