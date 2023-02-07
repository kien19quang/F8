import { Schema, Document } from 'mongoose';

const BlogSchema = new Schema(
  {
    description: String,
    image_url: String,
    is_approved: Boolean,
    is_bookmark: Boolean,
    is_published: Boolean,
    meta_description: String,
    meta_title: String,
    reactions_count: Number,
    slug: String,
    thumbnail_url: String,
    title: String,
    min_read: Number,
  },
  {
    collection: 'Blog',
    timestamps: true,
  },
);

export { BlogSchema };

export interface Blog extends Document {
  description: string;
  image_url: string;
  is_approved: boolean;
  is_bookmark: boolean;
  is_published: boolean;
  meta_description: string;
  meta_title: string;
  reactions_count: number;
  slug: string;
  thumbnail_url: string;
  title: string;
  min_read: number;
}
