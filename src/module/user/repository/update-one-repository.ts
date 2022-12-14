import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/service/prisma.service'

@Injectable()
export class UserUpdateOneRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({
      where,
      data,
    })
  }
}
