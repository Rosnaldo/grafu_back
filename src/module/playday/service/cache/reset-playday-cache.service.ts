import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';
import { ParticipantsWithUser } from 'src/module/participant/model/participant-with-user';

import { PlaydayWithParticipantsAndUser } from '../../model/playday-with-participants-and-user';
import { GetPlaydayCacheService } from './get-playday-cache.service';

@Injectable()
export class ResetPlaydayCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly getPlaydayCache: GetPlaydayCacheService,
  ) {}

  async execute(
    playdayId: string,
    playday: PlaydayWithParticipantsAndUser,
  ): Promise<void> {
    await this.cacheManager.set(`/v1/playday/${playdayId}?participant_user=true`, playday)
  }

  async byUser(
    newUser: User,
    playdayId: string,
  ): Promise<void> {
    const playday = await this.getPlaydayCache.execute(playdayId)

    if (playday) {
      const pIndex = playday.participants.findIndex((p) => p.email == newUser.email)
      const participantFound  = pIndex != -1

      if (participantFound) {
        playday.participants[pIndex] = {
          id: playday.participants[pIndex].id,
          email: newUser.email,
          playdayId: playday.participants[pIndex].playdayId,
          status: playday.participants[pIndex].status,
          userId: newUser.id,
          user: newUser,
        }
        await this.execute(playdayId, playday)
      }
    }
  }
  
  updateParticipant(playday: PlaydayWithParticipantsAndUser, participant: ParticipantsWithUser, pIndex: number) {
    playday.participants[pIndex] = participant
  }

  addParticipant(playday: PlaydayWithParticipantsAndUser, participant: ParticipantsWithUser) {
    playday.participants.push(participant)
  }

  async byParticipant(
    playdayId: string, newParticipant: ParticipantsWithUser
  ) {
    const playday = await this.getPlaydayCache.execute(playdayId)

    if (playday) {
      const pIndex = playday.participants.findIndex((p) => p.email == newParticipant.email)
      const participantFound  = pIndex != -1
  
      if (participantFound) {
        this.updateParticipant(playday, newParticipant, pIndex)
      } else {
        this.addParticipant(playday, newParticipant)
      }

      await this.execute(playdayId, playday)
    }
  }
}
