import { Schema, Document } from 'mongoose';

const TrackSchema = new Schema(
  {
    course_id: { type: String, required: true },
    duration: Number,
    is_free: Boolean,
    position: Number,
    title: { type: String, required: true },
    track_steps: [{ type: Schema.Types.ObjectId, ref: 'TrackStep' }],
    track_steps_count: Number,
  },
  {
    collection: 'Track',
    timestamps: true,
  },
);

export { TrackSchema };

export interface Track extends Document {
  course_id: string;
  duration: number;
  is_free: boolean;
  position: number;
  title: string;
  track_steps: string[];
  track_steps_count: number;
}
