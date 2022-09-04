import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ParticipantUpdateOneRepository } from '../repository/update-one-repository'
import { ResetParticipantCacheService } from '../service/reset-participant-cache.service'

@Injectable()
export class ParticipantUpdateUseCase {
  constructor(
    private readonly updateRepository: ParticipantUpdateOneRepository,
    private readonly resetCache: ResetParticipantCacheService,
  ) {}

  async execute(
    playdayId: string,
    where: Prisma.ParticipantWhereUniqueInput,
    data: Prisma.ParticipantUpdateInput = {},
  ): Promise<void> {
    const uParticipant = await this.updateRepository.execute(
      where, data,
    )
    this.resetCache.execute(playdayId, uParticipant)
  }
}
