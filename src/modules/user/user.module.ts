import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { UserGetOneRepository } from './repositories/get-one-repository'
import { UserUpdateOneRepository } from './repositories/update-one-repository'
import { UserQueryService } from './services/query.service'
import { UserFindOneController } from './controllers/find-one.controller'
import { UserUpdateAvatarController } from './controllers/update-avatar/index'
import { UserRegisterController } from './controllers/register.controller'
import { UserInsertOneRepository } from './repositories/insert-one-repository'

@Module({
  imports: [],
  controllers: [UserRegisterController, UserFindOneController, UserUpdateAvatarController],
  providers: [UserInsertOneRepository, UserGetOneRepository, UserUpdateOneRepository, PrismaService, UserQueryService],
})
export class UserModule {}
