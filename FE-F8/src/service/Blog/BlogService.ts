import axiosClient from '../../apiClient/axiosClient';
import { BlogApiResponse } from '@/src/models/Blog/BlogModel';

const getAllBlog = async (pageNumber: number, limit: number = 2): Promise<BlogApiResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'GET',
        url: `blog/getAll?page=${pageNumber}&limit=${limit}`
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { getAllBlog };
