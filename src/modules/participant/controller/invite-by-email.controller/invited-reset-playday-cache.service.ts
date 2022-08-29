import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common'
import { Participant } from '@prisma/client';
import { Cache } from 'cache-manager';

import { GetPlaydayCacheService } from 'src/modules/playday/services/cache/get-playday-cache.service';
import { ResetPlaydayCacheService } from 'src/modules/playday/services/cache/reset-playday-cache.service';

@Injectable()
export class InvitedResetPlaydayCacheService {
  private readonly logger = new Logger(InvitedResetPlaydayCacheService.name)
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly resetPlaydayCache: ResetPlaydayCacheService,
    private readonly getPlaydayCache: GetPlaydayCacheService,
  ) {}

  async execute(
    playdayId: string,
    invitedParticipant: Participant,
  ): Promise<void> {
    const playday = await this.getPlaydayCache.execute(playdayId)
    if (playday) {
      playday['participants'].push(invitedParticipant)
      await this.resetPlaydayCache.execute(playdayId, playday)
    }
  }
}
