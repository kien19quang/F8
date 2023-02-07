import { RoadMapModel } from '@/src/models/RoadMap/RoadMapModels';
import axiosClient from '../../apiClient/axiosClient';

const getAllRoadMap = async (): Promise<RoadMapModel[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosClient({
        method: 'GET',
        url: 'road-map/getAllRoadMap'
      });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export { getAllRoadMap };