import axiosClient from 'src/apiClient/axiosClient';
import { CoursesDto } from '@/src/models/HomePage/Course';

const getCourseBySlug = (slug: string): Promise<CoursesDto> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'GET',
        url: `/Courses/GetCourseBySlug?slug=${slug}`
      });

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

const createCourse = (data: CoursesDto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'POST',
        url: '/courses/createCourse',
        data
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

const updateCourse = (data: CoursesDto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'PUT',
        url: '/courses/updateCourse',
        data
      });

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

const deleteCourse = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'delete',
        url: '/courses/deleteCourse',
        data: { id }
      });

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { getCourseBySlug, createCourse, updateCourse, deleteCourse };
