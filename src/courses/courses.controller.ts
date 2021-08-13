import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly CourseService: CoursesService) {}

  @Get()
  findAll() {
    return this.CourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('entrou aqui. FIND ID');
    return this.CourseService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDto) {
    return this.CourseService.create(createCourseDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDto) {
    return this.CourseService.update(id, updateCourseDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CourseService.remove(id);
  }
}
