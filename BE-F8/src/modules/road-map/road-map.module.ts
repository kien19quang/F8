import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadMapController } from './controllers/road-map.controller';
import { RoadMapSchema } from './models/road-map.model';
import { RoadMapRepository } from './repositories/road-map.repository';
import { RoadMapService } from './services/road-map.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'RoadMap',
        schema: RoadMapSchema,
      },
    ]),
  ],
  controllers: [RoadMapController],
  providers: [RoadMapService, RoadMapRepository],
})
export class RoadMapModule {}
