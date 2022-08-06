import { Inject } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserService } from "../user.service";

export class UserGetByIdRepository {
  constructor(
    @Inject()
    private readonly service: UserService
  ) {}

  async execute (id: string): Promise<User> {
    return this.service.getById(id);
  }
}
