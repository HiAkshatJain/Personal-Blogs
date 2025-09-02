import axiosInstance from '../utils/axiosInstance';
import { endpoints } from "../apis";

const { NEWSLETTER_SUBSCRIBE_API } = endpoints;


export const subscribeToNewsletter = async (email: string) => {
  const response = await axiosInstance.post(NEWSLETTER_SUBSCRIBE_API, { email });
  return response.data;
};