import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoadMapDto } from '../dto/road-map.dto';
import { RoadMapService } from '../services/road-map.service';

@ApiTags('Road Map')
@Controller('Road-map')
export class RoadMapController {
  constructor(private readonly roadMapService: RoadMapService) {}

  @Get('getAllRoadMap')
  async getAllRoadMap() {
    return await this.roadMapService.getAllRoadMap();
  }

  @Post('createRoadMap')
  async createRoadMap(@Body() data: RoadMapDto) {
    return await this.roadMapService.createRoadMap(data);
  }
}
