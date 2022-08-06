import { Inject } from "@nestjs/common";
import { Playday } from "@prisma/client";
import { PlaydayService } from "../playday.service";

export class PlaydayGetByIdRepository {
  constructor(
    @Inject()
    private readonly service: PlaydayService
  ) {}

  async execute (id: string): Promise<Playday> {
    return this.service.getById(id);
  }
}
