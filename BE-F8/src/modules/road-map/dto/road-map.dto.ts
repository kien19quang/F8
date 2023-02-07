import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoadMapDto {
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  image_url: string;

  @ApiProperty()
  @IsNotEmpty()
  slug: string;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  courses: string[];
}
