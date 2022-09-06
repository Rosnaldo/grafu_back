import { Injectable } from '@nestjs/common'
import { Participant, ParticipantStatus } from '@prisma/client'
import { ParticipantsWithUser } from '../model/participant-with-user'

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
  ): Promise<ParticipantsWithUser> {
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
    ) as Promise<ParticipantsWithUser>
  }
}
