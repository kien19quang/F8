import { Injectable } from '@nestjs/common';
import { RoadMapDto } from '../dto/road-map.dto';
import { RoadMapRepository } from '../repositories/road-map.repository';

@Injectable()
export class RoadMapService {
  constructor(private readonly roadMapRepository: RoadMapRepository) {}

  async getAllRoadMap() {
    const res = await this.roadMapRepository.findAll();
    for (let i = 0; i < res.length; i++) {
      await res[i].populate('courses');
    }
    return res;
  }

  async createRoadMap(data: RoadMapDto) {
    return await this.roadMapRepository.create(data);
  }

  async updateRoadMap(id: string, data: RoadMapDto) {
    return await this.roadMapRepository.findByIdAndUpdate(id, data);
  }

  async deleteRoadMap(id: string) {
    return await this.roadMapRepository.deleteOne(id);
  }
}
