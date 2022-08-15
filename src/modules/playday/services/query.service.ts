import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PlaydayQueryService {
  constructor() {}

  execute({
    participant = 'false',
    participant_user = 'false',
  }): Prisma.PlaydayInclude {
    const includeParticipant = participant != undefined
    const includeParticipantUser = participant_user != undefined
  
    if (includeParticipantUser) {
      return {
        participants: {
          include: {
            user: true,
          }
        }
      }
    }

    return {
      participants: includeParticipant,
    }
  }
}
