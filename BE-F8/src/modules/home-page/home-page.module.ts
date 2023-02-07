import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './controllers/courses.controller';
import { CoursesSchema } from './models/course.model';
import { CoursesRepository } from './repositories/courses.reopository';
import { CoursesService } from './services/courses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Courses',
        schema: CoursesSchema,
      },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesRepository, CoursesService],
})
export class HomePageModule {}
