import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class PlaydayQueryService {
  constructor() {}

  execute(
    participant: string,
  ): Prisma.PlaydayInclude {
    return {
      Participants: (participant != undefined),
    }
  }
}
