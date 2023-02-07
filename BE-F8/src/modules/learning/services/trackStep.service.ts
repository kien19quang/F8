import { Injectable } from '@nestjs/common';
import { TrackStepDto } from '../dto/trackStep.dto';
import { TrackRepository } from '../repositories/track.repository';
import { TrackStepRepository } from '../repositories/trackStep.repository';

@Injectable()
export class TrackStepService {
  constructor(
    private readonly trackStepRepository: TrackStepRepository,
    private readonly trackRepository: TrackRepository,
  ) {}

  async getAllTrackStep() {
    return await this.trackStepRepository.findAll();
  }

  async createTrackStep(data: TrackStepDto) {
    const track_step = await this.trackStepRepository.create(data);
    await this.trackRepository.findByIdAndUpdate(track_step.track_id, {
      $push: {
        track_steps: track_step._id,
      },
    });
    return track_step;
  }

  async updateTrackStep(id: string, data: TrackStepDto) {
    return await this.trackStepRepository.findByIdAndUpdate(id, data);
  }

  async deleteTrackStep(id: string) {
    return await this.trackStepRepository.deleteOne(id);
  }
}
