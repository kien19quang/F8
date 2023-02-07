import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TrackDto {
  @ApiProperty()
  @IsNotEmpty()
  course_id: string;

  @ApiProperty()
  @IsNotEmpty()
  duration: number;

  is_free: boolean;

  @ApiProperty()
  @IsNotEmpty()
  position: number;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  track_steps: string[];

  track_steps_count: number;
}
