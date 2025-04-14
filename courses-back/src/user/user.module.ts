import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/entities/course.entity';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule.register({
    secret:'057838a61a191de6569b8b648b4ec7b40791477ef2abdcdb3dfdaa8e929f45354bbd1e3f2537e0b1726663066e9f6170ec31e4b3a69212efd801799d4b17f136fa24e8e89ae67a52bc4b1cc6cd97455085ff5decc8448f2e2add477e16cf7b43f763236528f6c274d07d605db216566233611e135f63a63b2700d7ab8c5750c808206a5edd2f3761b5d85767efe944f1c2068f1faa066a154b90f31325ae5c457376ee877ab6adaca5e9efca69fd85764059333ce28a65525957992b13c1fdc9e0d0e0c3099014d51c7f5ea1ebe5b464010ffd433d72b97fb0cfb0e03bfc84ce4572949fa84a21da3c643451fbea14751c2e4f88031fccf338ddcb67f4a6e630c4e19665161e5e578f281e9186e7ae7827a02b02d0843598fd7db9bdc8221327c3f0c6213058fae81403c6d5eaf1e653ef3636fd0dbe2d07c1ccb4cf1a33e46ee1caed11f843ec34120338a61659781645c5755a98e2d06d9f96262071a5f627351792b93932218df5bf8010b060dfe3ce62944c5cd6897b7985f4f606382f6f17f2ecb987e78b87883a56765ebf7604fc6d8f4a4f1746bc0e9f2204c3c1a9657d87133c417a6339f67104f88967d5b13764ef6a9613798511cb3de548a33334e0e70806baa71a4b13b7b361d38eac9d51731d9c1a936147aaefee9dfa42fa7f115fed6613dee016f52eb8084b752158ab77d63f2d1652c66015813d31d73d9d',
    signOptions:{expiresIn:'1d'}
  })],
  controllers: [UserController],
  providers: [UserService,AuthService,JwtAuthGuard],
  exports:[UserService,AuthService,JwtModule,JwtAuthGuard]
})
export class UserModule {}
