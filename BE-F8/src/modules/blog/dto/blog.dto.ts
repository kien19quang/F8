import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  thumbnail_url: string;

  @ApiProperty()
  @IsNotEmpty()
  min_read: number;

  @ApiProperty()
  @IsNotEmpty()
  slug: string;
}

export class PaginationBlogDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}
