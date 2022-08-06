import { Injectable } from '@nestjs/common';
import { Playday } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class PlaydayService {
  constructor(private prisma: PrismaService) {}

  async getById(
    id: string,
  ): Promise<Playday | null> {
    return this.prisma.playday.findUnique({
      where: {
        id,
      },
    });
  }
}