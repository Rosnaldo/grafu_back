import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager';

@Injectable()
export class GetUserCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    email: string,
  ): Promise<string | null> {
    const newEmail = email.replace('@', '%40');
    return this.cacheManager.get(`/v1/user/${newEmail}`)
  }
}
