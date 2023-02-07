import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { TrackStep } from '../models/trackStep.model';

@Injectable()
export class TrackStepRepository extends BaseRepository<TrackStep> {
  constructor(
    @InjectModel('TrackStep')
    private readonly trackStepModel: Model<TrackStep>,
  ) {
    super(trackStepModel);
  }
}
