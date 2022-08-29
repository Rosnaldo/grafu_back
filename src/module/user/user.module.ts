import { Module } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma.service'

import { UserGetOneRepository } from './repository/get-one-repository'
import { UserUpdateOneRepository } from './repository/update-one-repository'
import { UserInsertOneRepository } from './repository/insert-one-repository'
import { UserQueryService } from './service/query.service'
import { UserFindOneController } from './controller/find-one.controller'
import { UserUpdateAvatarController } from './controller/update-avatar/index'
import { UserRegisterController } from './controller/register.controller'
import { GetUserCacheService } from './service/cache/set-user-cache.service'

@Module({
  imports: [],
  controllers: [
    UserFindOneController,
    UserUpdateAvatarController,
    UserRegisterController,
  ],
  providers: [
    UserInsertOneRepository,
    UserGetOneRepository,
    UserUpdateOneRepository,
    PrismaService,
    UserQueryService,
    GetUserCacheService,
  ],
  exports: [UserGetOneRepository]
})
export class UserModule {}
