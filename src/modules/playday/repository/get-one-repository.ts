import { Injectable } from "@nestjs/common"
import { Playday, Prisma } from "@prisma/client"
import { PrismaService } from "src/services/prisma.service"

@Injectable()
export class PlaydayGetOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.PlaydayWhereUniqueInput,
    include: Prisma.PlaydayInclude = {},
  ): Promise<Playday | null> {
    return this.prisma.playday.findFirst({
      where,
      include,
    })
  }
}
