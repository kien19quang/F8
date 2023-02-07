import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ETypeTrackStep } from '../enum/learning.enum';

export class TrackStepDto {
  is_bookmarked: boolean;

  @IsNotEmpty()
  @ApiProperty()
  is_published: boolean;

  @IsNotEmpty()
  @ApiProperty()
  position: number;

  @IsNotEmpty()
  @ApiProperty()
  duration: number;

  @ApiProperty()
  image_url: string;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  video_url: string;

  @IsNotEmpty()
  @ApiProperty()
  type: ETypeTrackStep;

  @IsNotEmpty()
  @ApiProperty()
  track_id: string;

  is_completed: boolean;
}
