import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBlogDto, PaginationBlogDto } from '../dto/blog.dto';
import { BlogService } from '../services/blog.service';

@ApiTags('Blog')
@Controller('Blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiQuery({ name: 'page', required: true, type: Number })
  @ApiQuery({ name: 'limit', required: true, type: Number })
  @ApiResponse({ status: 200, type: CreateBlogDto, isArray: true })
  @Get('getAll')
  async getAllBlog(@Query() { page, limit }: PaginationBlogDto) {
    return await this.blogService.getAllBlog(page, limit);
  }
}
