import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UserGetByIdRepository } from './repository/get-by-id-repository';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserGetByIdRepository, PrismaService],
})
export class UserModule {}
