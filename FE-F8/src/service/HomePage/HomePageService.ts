import { CoursesDto } from '@/src/models/HomePage/Course';
import axiosClient from '../../apiClient/axiosClient';

const getAllCourse = async (searchText: string = '', isPublish?: number): Promise<CoursesDto[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let response;
      if (isPublish === undefined) {
        response = await axiosClient({
          method: 'GET',
          url: `courses/getAll?&searchText=${searchText}`
        });
      } else {
        response = await axiosClient({
          method: 'GET',
          url: `courses/getAll?isPublish=${isPublish}&searchText=${searchText}`
        });
      }

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { getAllCourse };
