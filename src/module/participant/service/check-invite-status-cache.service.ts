import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Participant } from '@prisma/client';
import { Cache } from 'cache-manager';

import { isNil as _isNil } from 'lodash'

@Injectable()
export class ResetParticipantCheckInviteStatusCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async execute(
    playdayId: string,
    participant: Participant | null,
  ): Promise<void> {
    const { email, status } = participant
    this.cacheManager.set(`/v1/participant/check-invite-status/${playdayId}/${email}`, status)
  }
}
