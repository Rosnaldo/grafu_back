import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserQueryService {
  constructor() {}

  execute(
    playday: string,
    participant: string,
  ): Prisma.UserInclude {
    var Playday = false;
    var Participant = false;
  
    if (playday != undefined) {
      Playday = true;
    }

    if (participant != undefined) {
      Participant = true;
    }

    return {
      Playday,
      Participant,
    }
  }
}
