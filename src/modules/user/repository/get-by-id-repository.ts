import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class UserGetByIdRepository {
  constructor(private prisma: PrismaService) {}

  async getById(
    id: string,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
