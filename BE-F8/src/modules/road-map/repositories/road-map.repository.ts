import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { RoadMap } from '../models/road-map.model';

@Injectable()
export class RoadMapRepository extends BaseRepository<RoadMap> {
  constructor(
    @InjectModel('RoadMap')
    private readonly roadMapModel: Model<RoadMap>,
  ) {
    super(roadMapModel);
  }
}
