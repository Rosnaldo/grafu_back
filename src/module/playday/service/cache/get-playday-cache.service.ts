import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager';
import { PlaydayWithParticipants } from '../../model/playdayWithParticipants';

@Injectable()
export class GetPlaydayCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    playdayId: string,
  ): Promise<PlaydayWithParticipants | null> {
    return this.cacheManager.get(`/v1/playday/${playdayId}`)
  }
}
