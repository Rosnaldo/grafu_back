import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager';

@Injectable()
export class ResetPlaydayCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    playdayId: string,
    playday: any,
  ): Promise<void> {
    await this.cacheManager.set(`/v1/playday/${playdayId}`, playday)
  }
}
