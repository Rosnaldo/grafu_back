import { Injectable } from '@nestjs/common';
import { Participant } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  async getAll(
    playdayId: string,
  ): Promise<Participant[] | null> {
    return this.prisma.participant.findMany({
      where: {
        playdayId,
      },
      include: {
        user: true
      }
    });
  }
}