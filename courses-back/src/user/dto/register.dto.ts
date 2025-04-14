import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";






export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(250)
    fullname: string;
  
    @IsString()
    @MinLength(8)
    password: string;
    
    @IsString()
    @MinLength(8)
    confirmPassword: string;
    
    @IsOptional()
    @IsEmail()
    email: string;

    @IsString()
    @Length(10)
    phoneNumber:string;

}