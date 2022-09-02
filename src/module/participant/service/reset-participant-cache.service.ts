import { Injectable, Logger } from '@nestjs/common'
import { Participant, Playday } from '@prisma/client';
import { PlaydayWithParticipants } from 'src/module/playday/model/playdayWithParticipants';

import { GetPlaydayCacheService } from 'src/module/playday/service/cache/get-playday-cache.service';
import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service';

@Injectable()
export class ResetParticipantCacheService {
  private readonly logger = new Logger(ResetParticipantCacheService.name)

  constructor(
    private readonly resetPlaydayCache: ResetPlaydayCacheService,
    private readonly getPlaydayCache: GetPlaydayCacheService,
  ) {}

  updateParticipant(playday: PlaydayWithParticipants, participant: Participant, pIndex: number) {
    playday.participants[pIndex] = participant
  }

  addParticipant(playday: PlaydayWithParticipants, participant: Participant) {
    playday.participants.push(participant)
  }

  async execute(
    playdayId: string,
    newParticipant: Participant,
  ): Promise<void> {
    const playday = await this.getPlaydayCache.execute(playdayId)

    if (playday) {
      const pIndex = playday.participants.findIndex((p) => p.email == newParticipant.email)
      const participantFound  = pIndex != -1

      this.logger.log(participantFound)
  
      if (participantFound) {
        this.updateParticipant(playday, newParticipant, pIndex)
      } else {
        this.addParticipant(playday, newParticipant)
      }

      await this.resetPlaydayCache.execute(playdayId, playday)
    }
  }
}
