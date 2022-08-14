import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserQueryService {
  constructor() {}

  execute(
    playday: string,
    participant: string,
  ): Prisma.UserInclude {
    return {
      OwnPlayday: (playday != undefined),
      Participate: (participant != undefined),
    }
  }
}
