import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
    refreshToken: String,
    avatar: String,
    registered: { type: Boolean, default: false },
    codeVerify: Number,
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export { UserSchema };

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
  avatar: string;
  registered: boolean;
  codeVerify: number;
}
