import { Injectable } from '@nestjs/common'
import { Participant, Prisma } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class ParticipantUpdateOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.ParticipantWhereUniqueInput,
    data: Prisma.ParticipantUpdateInput = {},
  ): Promise<Participant> {
    return this.prisma.participant.update({
      where,
      data,
    })
  }
}
