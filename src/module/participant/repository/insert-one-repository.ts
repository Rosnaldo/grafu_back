import { Injectable } from '@nestjs/common'
import { Participant, Prisma } from '@prisma/client'
import { PrismaService } from 'src/service/prisma.service'

@Injectable()
export class ParticipantInsertOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    data: Prisma.ParticipantCreateInput,
    include: Prisma.ParticipantInclude,
  ): Promise<Participant> {
    return this.prisma.participant.create({
      data,
      include,
    })
  }
}
