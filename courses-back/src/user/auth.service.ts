import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService,
        private readonly jwtService:JwtService
    ){}

    async validateUser(loginDto:LoginDto):Promise<User>{
        const user:User=await this.userService.findOneUserByEmail(loginDto.email);
        if(!user) throw new BadRequestException("user not found ");
        const isMatch:boolean=bcrypt.compareSync(loginDto.password,user.password);
        if(!isMatch){
            throw new BadRequestException('Password does not match');
        }
        return user;
    }

    async login(user:User){
        const payload ={email:user.email,sub :user.id,roles:[user.roles]}
        return {access_token:this.jwtService.sign(payload)}
    }

    async register(registerDto:RegisterDto){
        if(registerDto.confirmPassword !== registerDto.password) throw new BadRequestException("password not match");
        const existingUser = await this.userService.findOneUserByEmail(registerDto.email);
        if (existingUser) {
        throw new BadRequestException('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const userToCreate = {
        ...registerDto,
        password: hashedPassword,
        };
        return this.userService.create(userToCreate);
    }

}