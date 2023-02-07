import { Schema, Document } from 'mongoose';
import { Courses } from 'src/modules/home-page/models/course.model';

const RoadMapSchema = new Schema(
  {
    description: String,
    image_url: String,
    slug: String,
    title: String,
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
      },
    ],
  },
  {
    timestamps: true,
    collection: 'RoadMap',
  },
);

export { RoadMapSchema };

export interface RoadMap extends Document {
  description: string;
  image_url: string;
  slug: string;
  title: string;
  courses: Courses[];
}
