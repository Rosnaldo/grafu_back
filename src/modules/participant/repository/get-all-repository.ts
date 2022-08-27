import { Injectable } from '@nestjs/common'
import { Participant, Prisma } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class ParticipantGetAllRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.ParticipantWhereInput,
    include: Prisma.ParticipantInclude = {},
  ): Promise<Participant[]> {
    return this.prisma.participant.findMany({
      where,
      include,
    })
  }
}
