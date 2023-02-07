import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrackStepDto } from '../dto/trackStep.dto';
import { TrackStepService } from '../services/trackStep.service';

@ApiTags('TrackStep')
@Controller('TrackStep')
export class TrackStepController {
  constructor(private readonly trackStepService: TrackStepService) {}

  @Post('create')
  async createTrackStep(@Body() data: TrackStepDto) {
    return await this.trackStepService.createTrackStep(data);
  }
}
