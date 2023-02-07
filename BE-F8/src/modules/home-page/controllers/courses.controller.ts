import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCourseDto, IQueryGetAll } from '../dto/courses.dto';
import { CoursesService } from '../services/courses.service';

@ApiTags('Courses')
@Controller('Courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('GetAll')
  @ApiResponse({ status: 200, type: CreateCourseDto, isArray: true })
  async getAllCourses(@Query() data: IQueryGetAll) {
    return await this.coursesService.getAllCourses(
      data.isPublish,
      data.searchText,
    );
  }

  @Get('GetCourseBySlug')
  @ApiResponse({ status: 200, type: CreateCourseDto })
  async getCourseBySlug(@Query('slug') slug: string) {
    console.log(slug);
    return await this.coursesService.getCourseBySlug(slug);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('CreateCourse')
  async createCourse(@Body() data: CreateCourseDto) {
    return await this.coursesService.createCourse(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('UpdateCourse')
  async updateCourse(@Param() id: string, @Body() data: CreateCourseDto) {
    return await this.coursesService.updateCourse(id, data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('DeleteCourse')
  async deleteCourse(@Req() req: any) {
    return await this.coursesService.deleteCourse(req.id);
  }
}
