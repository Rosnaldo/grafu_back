import { Injectable } from '@nestjs/common'
import { Participant, ParticipantStatus, Prisma } from '@prisma/client'

import { ParticipantUpdateOneRepository } from '../repository/update-one-repository'

type Input = {
  participantId: string,
  userId: string,
}

@Injectable()
export class ParticipantRegisteredUseCase {
  constructor(
    private readonly updateOneRepository: ParticipantUpdateOneRepository,
  ) {}

  async execute(
    {
      participantId,
      userId,
    }: Input
  ): Promise<Participant> {
    return this.updateOneRepository.execute(
      {
        id: participantId,
      },
      {
        user: {
          connect: {
            id: userId,
          }
        },
        status: ParticipantStatus.pending,
      },
      {
        user: true,
      }
    )
  }
}
