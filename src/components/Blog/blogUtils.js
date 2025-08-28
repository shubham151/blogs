export const stripHtmlAndTruncate = (html, maxLength = 150) => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getPostImage = (post, placeholder) => {
  return post.featured_media ? placeholder : placeholder;
};

export const getPostCategories = (post, defaultCategory) => {
  return defaultCategory;
};

// Filtering and sorting functions
export const filterPosts = (posts, searchTerm) => {
  if (!searchTerm) return posts;

  const searchLower = searchTerm.toLowerCase();
  return posts.filter((post) => {
    const title = post.title?.rendered || "";
    const excerpt = post.excerpt?.rendered || "";

    return (
      title.toLowerCase().includes(searchLower) ||
      excerpt.toLowerCase().includes(searchLower)
    );
  });
};

export const sortPosts = (posts, sortBy) => {
  const sortedPosts = [...posts];

  switch (sortBy) {
    case "oldest":
      return sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "title":
      return sortedPosts.sort((a, b) => {
        const titleA = a.title?.rendered || "";
        const titleB = b.title?.rendered || "";
        return titleA.localeCompare(titleB);
      });
    case "latest":
    default:
      return sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};

export const getFeaturedPosts = (posts, count) => posts.slice(0, count);
export const getAllPosts = (posts, featuredCount) => posts.slice(featuredCount);

export const paginatePosts = (posts, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return { currentPosts, totalPages };
};
