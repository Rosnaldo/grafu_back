import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager';
import { PlaydayWithParticipantsAndUser } from '../../model/playday-with-participants-and-user';

@Injectable()
export class GetPlaydayCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    playdayId: string,
  ): Promise<PlaydayWithParticipantsAndUser | null> {
    return this.cacheManager.get(`/v1/playday/${playdayId}?participant_user=true`)
  }
}
