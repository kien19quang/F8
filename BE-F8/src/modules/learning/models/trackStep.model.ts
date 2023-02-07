import { Schema, Document } from 'mongoose';

const TrackStepSchema = new Schema(
  {
    is_bookmarked: Boolean,
    is_published: Boolean,
    position: Number,
    duration: Number,
    image_url: String,
    title: String,
    video_url: String,
    type: String,
    is_completed: { type: Boolean, default: false },
    track_id: { type: Schema.Types.ObjectId, ref: 'Track' },
  },
  {
    timestamps: true,
    collection: 'TrackStep',
  },
);

export { TrackStepSchema };
export interface TrackStep extends Document {
  is_bookmarked: boolean;
  is_published: boolean;
  position: number;
  duration: number;
  image_url: string;
  title: string;
  video_url: string;
  type: string;
  track_id: string;
  is_completed: boolean;
}
