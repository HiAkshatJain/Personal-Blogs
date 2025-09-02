import axiosInstance from '../utils/axiosInstance';
import { endpoints } from '../apis';

const { GET_BLOGS_API, GET_ALL_BLOG_POSTS, FEATURED_BLOGS_API } = endpoints;

export const getFeaturedPosts = async () => {
  const response = await axiosInstance.get(FEATURED_BLOGS_API);
  return response.data;
};

export const getBlogPost = async (id: string) => {
  const response = await axiosInstance.get(`${GET_BLOGS_API}/${id}`);
  return response.data;
};

export const getAllBlogPosts = async () => {
  const response = await axiosInstance.get(GET_ALL_BLOG_POSTS);
  return response.data;
};

// http://localhost:4000/api/blogs/68b6daff91e7e9a62fb729a8