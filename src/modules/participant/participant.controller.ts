import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Participant } from '@prisma/client';
import { ParticipantGetByPlaydayRepository } from './repository/get-by-playday-repository';

@Controller('playday')
export class ParticipantController {
  constructor(
    @Inject()
    private readonly repository: ParticipantGetByPlaydayRepository
  ) {}
  
  @Get(':playdayId')
  async getById(@Param('playdayId') playdayId: string): Promise<Participant[]> {
    return this.repository.execute(playdayId);
  }
}
