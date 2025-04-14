import { BadRequestException, Controller, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { diskStorage } from "multer";
import path from "path";
import { CourseService } from "src/course/course.service";





@Controller("images/courses")
export class UploadsController{

    constructor(private readonly courseService:CourseService){}


    @Patch(':id/image')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'./images/courses',
            filename:(req,file,cb)=>{
                const prefix =`${Date.now()}-${Math.round(Math.random()*1000000)}`;
                const filename=`${prefix}-${file.originalname}`;
                cb(null,filename);
            }
        }),
        fileFilter:(req,file,cb)=>{
            if(!file.mimetype.match(/^image\/(jpg|jpeg|png|gif)$/)){
                return cb(new BadRequestException('only image files are allowed!'),false)
            }
            cb(null,true);
        }
    }))
    public async updateImage(@Param('id') id:number,@UploadedFile()file:Express.Multer.File){
        if(!file) throw new BadRequestException("no image file provided");
        console.log("File uploaded",{file});
        const imageUrl = `/images/courses/${file.filename}`
        await this.courseService.updateImageUrl(id,imageUrl);
        return {message:"file uploaded successfully",imageUrl};
    }



    //get course image 
    @Get(":image")
    public getCourseImage(@Param("image") iamge:string,@Res() res:Response){
        return res.sendFile(iamge,{root:'images/courses'})
    }
}