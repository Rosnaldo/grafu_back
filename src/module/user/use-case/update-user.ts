import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service'
import { UserUpdateOneRepository } from '../repository/update-one-repository'
import { ResetUserCacheService } from '../service/cache/reset-user-cache.service'

@Injectable()
export class UserUpdateUseCase {
  constructor(
    private readonly updateRepository: UserUpdateOneRepository,
    private readonly resetPlaydayCache: ResetPlaydayCacheService,
    private readonly resetUserCache: ResetUserCacheService,
  ) {}

  async execute(
    playdayId: string,
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput = {},
  ): Promise<void> {
    const newUser = await this.updateRepository.execute(
      where, data,
    )
    await this.resetUserCache.execute(newUser)
    await this.resetPlaydayCache.byUser(newUser, playdayId)
  }
}
