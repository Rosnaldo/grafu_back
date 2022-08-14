import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { UserGetOneRepository } from './repositories/get-one-repository'
import { UserQueryService } from './services/query.service'
import { UserController } from './user.controller'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserGetOneRepository, PrismaService, UserQueryService],
})
export class UserModule {}
