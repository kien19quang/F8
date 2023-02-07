import { ApiResponse } from '../Api/ApiResponse';
export interface BlogDto {
  description: string;
  image_url: string;
  is_approved: boolean;
  is_bookmark: boolean;
  is_published: boolean;
  meta_description: string;
  meta_title: string;
  reactions_count: number;
  slug: string;
  thumbnail_url: string;
  title: string;
  min_read: number;
  createAt: Date;
  updateAt: Date;
}

export type BlogApiResponse = ApiResponse<BlogDto[]>;
