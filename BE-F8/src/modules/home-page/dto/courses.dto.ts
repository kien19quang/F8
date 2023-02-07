import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  thumbnailUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  icon_url: string;

  @ApiPropertyOptional()
  student_count: number;

  @ApiPropertyOptional()
  is_pro: boolean;

  @ApiPropertyOptional()
  @ApiPropertyOptional()
  is_published: boolean;

  @ApiPropertyOptional()
  is_registered: boolean;

  @ApiPropertyOptional()
  slug: string;

  @ApiPropertyOptional()
  user_progress: number;
}

export interface IQueryGetAll {
  searchText: string;
  isPublish?: boolean;
}
