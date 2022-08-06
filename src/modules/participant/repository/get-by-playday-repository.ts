import { Inject } from "@nestjs/common";
import { Participant } from "@prisma/client";
import { ParticipantService } from "../participant.service";

export class ParticipantGetByPlaydayRepository {
  constructor(
    @Inject()
    private readonly service: ParticipantService
  ) {}

  async execute (id: string): Promise<Participant[]> {
    return this.service.getAll(id);
  }
}
