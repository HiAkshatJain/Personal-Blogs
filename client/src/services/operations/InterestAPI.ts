import axiosInstance from '../utils/axiosInstance';
import { endpoints } from '../apis';

const { GET_INTERESTS } = endpoints;

export const getInterests = async () => {
  const response = await axiosInstance.get(GET_INTERESTS);
  return response.data;
};
