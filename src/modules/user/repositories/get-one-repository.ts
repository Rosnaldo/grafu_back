import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class UserGetOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.UserWhereUniqueInput,
    include: Prisma.UserInclude = {},
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
      include,
    })
  }
}
