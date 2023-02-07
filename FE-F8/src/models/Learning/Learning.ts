export interface TrackDto {
  course_id: string;
  duration: number;
  is_free: boolean;
  position: number;
  title: string;
  track_steps: TrackStepDto[];
  track_steps_count: number;
  _id: string;
  countCompleted: number;
}

export interface ApiTrackDto {
  track_step_count: number;
  tracks: TrackDto[];
}

export interface CreateTrackDto {
  course_id: string;
  duration: number;
  is_free: boolean;
  position: number;
  title: string;
  track_steps: string[];
  track_steps_count: number;
  _id: string;
}

export enum ETypeTrackStep {
  Video = 'video',
  Lesson = 'lesson',
  Challenge = 'challenge'
}

export interface TrackStepDto {
  course_id: string;
  is_bookmarked: boolean;
  is_published: boolean;
  position: number;
  duration: number;
  image_url: string;
  title: string;
  video_url: string;
  type: ETypeTrackStep;
  track_id: string;
  _id: string;
  is_completed: boolean;
  createdAt: string;
  updatedAt: string;
}
