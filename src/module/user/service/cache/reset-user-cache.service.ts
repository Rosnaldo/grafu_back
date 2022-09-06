import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';

@Injectable()
export class ResetUserCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    newUser: User,
  ): Promise<void> {
    this.cacheManager.set(`/v1/user/${newUser.email}`, newUser)
  }
}
