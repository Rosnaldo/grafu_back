import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class UserGetByEmailRepository {
  constructor(private prisma: PrismaService) {}

  async execute(
    email: string,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }
}
