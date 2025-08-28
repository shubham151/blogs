import image2 from "../../assets/image-2.png";

export const BLOG_CONFIG = {
  header: {
    subtitle: "Future of Founders",
    mainTitle: "Blog",
  },
  search: {
    placeholder: "Search posts...",
    sortOptions: [
      { value: "latest", label: "Latest" },
      { value: "oldest", label: "Oldest" },
      { value: "title", label: "Title" },
    ],
  },
  pagination: {
    itemsPerPage: 8,
    featuredCount: 4,
  },
  placeholders: {
    image: image2,
    category: "Blog Post",
    fallbackImage: image2,
  },
};
