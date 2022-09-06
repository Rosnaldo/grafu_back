import { Injectable, Logger } from '@nestjs/common'

import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service';
import { ParticipantsWithUser } from '../model/participant-with-user';
import { ResetParticipantCheckInviteStatusCacheService } from './check-invite-status-cache.service';

@Injectable()
export class ResetParticipantCacheService {
  private readonly logger = new Logger(ResetParticipantCacheService.name)

  constructor(
    private readonly resetPlaydayCache: ResetPlaydayCacheService,
    private readonly resetParticipantCheckInviteStatusCache: ResetParticipantCheckInviteStatusCacheService,
  ) {}

  async execute(
    playdayId: string,
    newParticipant: ParticipantsWithUser,
  ): Promise<void> {
    await this.resetPlaydayCache.byParticipant(playdayId, newParticipant)
    await this.resetParticipantCheckInviteStatusCache.execute(playdayId, newParticipant)
  }
}
