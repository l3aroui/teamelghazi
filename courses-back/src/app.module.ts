import { AuthService } from './user/auth.service';
import { UploadsModule } from './uploads/uploads.module';
import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course/entities/course.entity';
import { Enrollment } from './enrollment/entities/enrollment.entity';
import { User } from './user/entities/user.entity';
import { AppService } from './app.service';


@Module({
  imports: [
        UploadsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'coursesDB',
      synchronize: true,
      entities: [User, Course, Enrollment],
      autoLoadEntities: true,
    }),
    UserModule, CourseModule, EnrollmentModule,UploadsModule],
  controllers: [],
  providers: [
        AuthService, AppService],
})
export class AppModule {}
