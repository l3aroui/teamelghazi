import { Module } from "@nestjs/common";
import { UploadsController } from "./uploads.controller";
import { MulterModule } from "@nestjs/platform-express";
import { CourseModule } from "src/course/course.module";




@Module({
    controllers:[UploadsController],
    imports:[MulterModule.register(),CourseModule]
})
export class UploadsModule{}
