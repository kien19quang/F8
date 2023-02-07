import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { Courses } from '../models/course.model';

@Injectable()
export class CoursesRepository extends BaseRepository<Courses> {
  constructor(
    @InjectModel('Courses')
    private readonly coursesModel: Model<Courses>,
  ) {
    super(coursesModel);
  }
}
