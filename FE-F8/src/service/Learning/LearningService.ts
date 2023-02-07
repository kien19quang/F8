import { ApiTrackDto } from 'src/models/Learning/Learning';
import axiosClient from 'src/apiClient/axiosClient';

const getAllTrack = (course_id: string): Promise<ApiTrackDto> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'GET',
        url: `Track/getAll?course_id=${course_id}`
      });

      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { getAllTrack };
