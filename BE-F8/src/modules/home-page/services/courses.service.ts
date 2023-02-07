import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/courses.dto';
import { CoursesRepository } from '../repositories/courses.reopository';

@Injectable()
export class CoursesService {
  constructor(private readonly coursesRepository: CoursesRepository) {}

  getAllCourses = async (isPublish?: boolean, searchText = '') => {
    if (isPublish !== undefined) {
      if (searchText) {
        return await this.coursesRepository.getByCondition({
          is_published: isPublish,
          $text: { $search: searchText },
        });
      } else {
        return await this.coursesRepository.getByCondition({
          is_published: isPublish,
        });
      }
    } else {
      if (searchText) {
        return await this.coursesRepository.getByCondition({
          $text: { $search: searchText },
        });
      } else {
        return await this.coursesRepository.findAll();
      }
    }
  };

  async getCourseBySlug(slug: string) {
    return await this.coursesRepository.findByCondition({
      slug,
    });
  }

  getCoursesByIds = async (courses_ids: string[]) => {
    return await this.coursesRepository.findByCondition({
      _id: { $all: courses_ids },
    });
  };

  createCourse = async (createCourseDto: CreateCourseDto) => {
    return await this.coursesRepository.create(createCourseDto);
  };

  updateCourse = async (id: string, createCourseDto: CreateCourseDto) => {
    return await this.coursesRepository.findByIdAndUpdate(id, createCourseDto);
  };

  deleteCourse = async (id: string) => {
    return await this.coursesRepository.deleteOne(id);
  };
}
