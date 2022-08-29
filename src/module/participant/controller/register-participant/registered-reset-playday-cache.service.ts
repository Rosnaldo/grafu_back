import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Participant } from '@prisma/client';
import { Cache } from 'cache-manager';

import { GetPlaydayCacheService } from 'src/module/playday/service/cache/get-playday-cache.service';
import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service';

@Injectable()
export class RegisteredResetPlaydayCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly resetPlaydayCache: ResetPlaydayCacheService,
    private readonly getPlaydayCache: GetPlaydayCacheService,
  ) {}

  async execute(
    playdayId: string,
    registeredParticipant: Participant,
  ): Promise<void> {
    const playday = await this.getPlaydayCache.execute(playdayId)
    if (playday) {
      const pIndex = playday['participants'].findIndex((p) => p['email'] == registeredParticipant.email)
      playday['participants'][pIndex] = registeredParticipant
      await this.resetPlaydayCache.execute(playdayId, playday)
    }
  }
}