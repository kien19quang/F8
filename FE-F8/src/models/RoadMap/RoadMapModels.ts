import { CoursesDto } from '../HomePage/Course';

export interface RoadMapModel {
  _id: string;
  description: string;
  image_url: string;
  slug: string;
  title: string;
  courses: CoursesDto[];
}

export interface CreateRoadmapDto {
  _id: string;
  description: string;
  image_url: string;
  slug: string;
  title: string;
  courses: string[];
}
