import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { UserGetByEmailRepository } from './repository/get-by-email-repository'
import { UserController } from './user.controller'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserGetByEmailRepository, PrismaService],
})
export class UserModule {}
