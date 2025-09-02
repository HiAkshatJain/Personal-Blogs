const SERVER_URL = import.meta.env.VITE_SERVER_URL + "/api";

export const endpoints = {
  GET_BLOGS_API: SERVER_URL + "/blogs",
  GET_ALL_BLOG_POSTS: SERVER_URL + '/blogs',
  FEATURED_BLOGS_API: SERVER_URL + "/blogs/featured",
  SOCIAL_BL_API: SERVER_URL + "/socials",
  GET_INTERESTS: SERVER_URL + "/interests",
  EXPERIENCE_BLOGS_API: SERVER_URL + "/experiences",
  CONTACT_MESSAGE_API: SERVER_URL + "/contacts",
  NEWSLETTER_SUBSCRIBE_API: SERVER_URL + "/newsletter/subscribe",
};

