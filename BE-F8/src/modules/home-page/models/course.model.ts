import { Schema, Document } from 'mongoose';

const CoursesSchema = new Schema(
  {
    title: String,
    thumbnailUrl: String,
    icon_url: String,
    students_count: Number,
    is_pro: Boolean,
    is_published: Boolean,
    is_registered: Boolean,
    slug: String,
    user_progress: Number,
  },
  {
    timestamps: true,
    collection: 'Courses',
  },
);

CoursesSchema.virtual('roadMaps', {
  ref: 'RoadMap',
  localField: '_id',
  foreignField: 'courses',
  justOne: false,
});

CoursesSchema.index({ title: 'text' });

export { CoursesSchema };

export interface Courses extends Document {
  title: string;
  thumbnailUrl: string;
  students_count: number;
  is_pro: boolean;
  is_published: boolean;
  is_registered: boolean;
  slug: string;
  user_progress: number;
  icon_url: string;
}
