import { Injectable } from '@nestjs/common';
import { BlogRepository } from '../repositories/blog.repository';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async getAllBlog(page: number, limit: number) {
    const count = await this.blogRepository.countDocuments({});
    const count_page = (count / limit).toFixed();
    const data = await this.blogRepository.getByCondition({}, null, {
      sort: {
        _id: 1,
      },
      skip: (page - 1) * limit,
      limit: Number(limit),
    });

    return {
      data,
      current_page: page,
      count_page,
    };
  }
}
