import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { Blog } from '../models/blog.model';

@Injectable()
export class BlogRepository extends BaseRepository<Blog> {
  constructor(
    @InjectModel('Blog')
    private readonly blogModel: Model<Blog>,
  ) {
    super(blogModel);
  }

  async countDocuments(filter) {
    return this.blogModel.countDocuments(filter);
  }
}
