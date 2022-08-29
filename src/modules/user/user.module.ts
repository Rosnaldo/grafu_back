import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { UserGetOneRepository } from './repositories/get-one-repository'
import { UserUpdateOneRepository } from './repositories/update-one-repository'
import { UserInsertOneRepository } from './repositories/insert-one-repository'
import { UserQueryService } from './services/query.service'
import { UserFindOneController } from './controllers/find-one.controller'
import { UserUpdateAvatarController } from './controllers/update-avatar/index'
import { UserRegisterController } from './controllers/register.controller'

@Module({
  imports: [],
  controllers: [UserFindOneController, UserUpdateAvatarController, UserRegisterController],
  providers: [UserInsertOneRepository, UserGetOneRepository, UserUpdateOneRepository, PrismaService, UserQueryService],
  exports: [UserGetOneRepository]
})
export class UserModule {}
