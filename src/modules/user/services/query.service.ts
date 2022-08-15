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
      adminPlayday: (playday != undefined),
      participate: (participant != undefined),
    }
  }
}
