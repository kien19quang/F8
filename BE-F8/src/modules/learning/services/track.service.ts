import { Injectable } from '@nestjs/common/decorators';
import { TrackDto } from '../dto/track.dto';
import { TrackRepository } from '../repositories/track.repository';

@Injectable()
export class TrackService {
  constructor(private readonly trackRepository: TrackRepository) {}

  async getAllTrack() {
    return await this.trackRepository.findAll();
  }

  async getTrackByCourseId(id: string) {
    const track = await this.trackRepository.getByCondition({
      course_id: { $all: id },
    });
    let cnt = 0;
    for (let i = 0; i < track.length; i++) {
      await track[i].populate('track_steps');
      cnt += track[i].track_steps.length;
    }
    return {
      tracks: track,
      track_step_count: cnt,
    };
  }

  async createTrack(data: TrackDto) {
    return await this.trackRepository.create(data);
  }

  async updateTrack(id: string, data: TrackDto) {
    return await this.trackRepository.findByIdAndUpdate(id, data);
  }

  async deleteTrack(id: string) {
    return await this.trackRepository.deleteOne(id);
  }
}
