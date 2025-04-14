import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course)
    private readonly courseRepository:Repository<Course>
  ){};

  async updateImageUrl(id: number, imageUrl: string) :Promise<void>{
    const course =await this.courseRepository.findOneBy({id});
    if(!course) throw new NotFoundException('course not found');
    course.imageUrl=imageUrl;
    await this.courseRepository.save(course);
  }

  async create(createCourseDto: CreateCourseDto):Promise<Course> {
    const course= this.courseRepository.create(createCourseDto);

    return await this.courseRepository.save(course);
  }

  async findAll():Promise<Course[]>{
    return await this.courseRepository.find();
  }

  async findOne(id: number):Promise<Course> {
    return await this.courseRepository.findOne({where:{id}});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.courseRepository.update(id,updateCourseDto);
  }

  async remove(id: number) {
    return await this.courseRepository.delete(id);
  }

}