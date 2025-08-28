export {
  stripHtmlAndTruncate,
  formatDate,
  getPostImage,
} from "../Blog/blogUtils";

// Additional utilities specific to blog detail
export const calculateReadingTime = (content) => {
  if (!content) return "5 minutes";
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} minute${minutes > 1 ? "s" : ""}`;
};

export const sanitizeContent = (content) => {
  if (!content) return "";
  return content;
};
