import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager';

@Injectable()
export class GetPlaydayCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    playdayId: string,
  ): Promise<string | null> {
    return this.cacheManager.get(`/v1/playday/${playdayId}`)
  }
}
