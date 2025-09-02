import axiosInstance from '../utils/axiosInstance';
import { endpoints } from '../apis';

const { CONTACT_MESSAGE_API } = endpoints;

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await axiosInstance.post(CONTACT_MESSAGE_API, data);
  return response.data;
};
