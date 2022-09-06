import { Injectable } from '@nestjs/common'
import { Participant, Prisma } from '@prisma/client'
import { PrismaService } from 'src/service/prisma.service'
import { ParticipantsWithUser } from '../model/participant-with-user'

@Injectable()
export class ParticipantUpdateOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.ParticipantWhereUniqueInput,
    data: Prisma.ParticipantUpdateInput = {},
    include: Prisma.ParticipantInclude = {
      playday: false,
      user: true,
    },
  ): Promise<ParticipantsWithUser | Participant> {
    return this.prisma.participant.update({
      where,
      data,
      include,
    })
  }
}
