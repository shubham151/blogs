const API_BASE_URL = "https://futureoffounders.com/wp-json/wp/v2";

const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
};

export const get = (endpoint, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;
  return apiRequest(url);
};

// Blog-specific API functions
export const blogApi = {
  getPosts: (params = {}) => get("/posts", { per_page: 20, ...params }),
  getPost: (id) => get(`/posts/${id}`),
  getCategories: () => get("/categories"),
  getTags: () => get("/tags"),
};
