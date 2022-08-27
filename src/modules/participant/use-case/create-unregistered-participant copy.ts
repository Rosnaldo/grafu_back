import { Injectable } from '@nestjs/common'
import { Participant, ParticipantStatus, Prisma } from '@prisma/client'

import { ParticipantInsertOneRepository } from '../repository/insert-one-repository'

type Input = {
  playdayId: string,
  email: string,
}

@Injectable()
export class ParticipantCreateUnregisteredUseCase {
  constructor(
    private readonly insertOneRepository: ParticipantInsertOneRepository,
  ) {}

  async execute(
    {
      playdayId,
      email,
    }: Input
  ): Promise<Participant> {
    return this.insertOneRepository.execute(
      {
        playday: {
          connect: {
            id: playdayId,
          }
        },
        email: email,
        status: ParticipantStatus.unregistered,
      },
    )
  }
}
