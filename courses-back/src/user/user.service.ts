import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
  ){}



  async findOneUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    
    return user;
  }
  

  

  async create(registerDto: RegisterDto) {
    const user= this.userRepository.create(registerDto);
    return await this.userRepository.save(user);
  }

  async findAllUsers():Promise<User[]>{
    return await this.userRepository.find();
  }
  async findOneUser(id: number) {
    return await this.userRepository.findOne({where:{id}});
  }
  async removeUser(id: number){
    return await this.userRepository.delete(id);
  }
}
