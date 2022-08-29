import { BadRequestException, Injectable } from '@nestjs/common'
import { Participant, ParticipantStatus, Prisma } from '@prisma/client'

import { isNil as _isNil } from 'lodash'
import { ParticipantGetOneRepository } from '../repository/get-one-repository'

import { ParticipantInsertOneRepository } from '../repository/insert-one-repository'

type Input = {
  playdayId: string,
  email: string,
}

@Injectable()
export class ParticipantCreateUnregisteredUseCase {
  constructor(
    private readonly getOneRepository: ParticipantGetOneRepository,
    private readonly insertOneRepository: ParticipantInsertOneRepository,
  ) {}

  async execute(
    {
      playdayId,
      email,
    }: Input
  ): Promise<Participant> {
    const participnat = await this.getOneRepository.execute(
      {
        playdayId,
      },
    )
  
    if (_isNil(participnat)) {
      throw new BadRequestException('Participnat not found')
    }

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
      {
        user: true,
      }
    )
  }
}
