import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TrackDto } from '../dto/track.dto';
import { TrackService } from '../services/track.service';

@ApiTags('Track')
@Controller('Track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @ApiQuery({ name: 'course_id', required: true, type: String })
  @Get('getAll')
  async getTrackByCourseId(@Query() { course_id }: { course_id: string }) {
    return await this.trackService.getTrackByCourseId(course_id);
  }

  @Post('createTrack')
  async createTrack(@Body() data: TrackDto) {
    return await this.trackService.createTrack(data);
  }
}
