import { Module } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma.service'

import { UserGetOneRepository } from './repository/get-one-repository'
import { UserUpdateOneRepository } from './repository/update-one-repository'
import { UserInsertOneRepository } from './repository/insert-one-repository'
import { UserQueryService } from './service/query.service'
import { UserFindOneController } from './controller/find-one.controller'
import { UserUpdateAvatarController } from './controller/update-avatar/index'
import { UserRegisterController } from './controller/register.controller'
import { GetUserCacheService } from './service/cache/get-user-cache.service'
import { ResetUserCacheService } from './service/cache/reset-user-cache.service'
import { UserUpdateUseCase } from './use-case/update-user'
import { PlaydayModule } from '../playday/playday.module'

@Module({
  imports: [PlaydayModule],
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
    ResetUserCacheService,
    UserUpdateUseCase,
  ],
  exports: [UserGetOneRepository]
})
export class UserModule {}
