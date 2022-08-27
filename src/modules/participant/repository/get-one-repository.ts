import { Injectable } from '@nestjs/common'
import { Participant, Prisma } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class ParticipantGetOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.ParticipantWhereInput,
    include: Prisma.ParticipantInclude = {},
  ): Promise<Participant> {
    return this.prisma.participant.findFirst({
      where,
      include,
    })
  }
}
