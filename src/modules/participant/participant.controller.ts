import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Participant } from '@prisma/client';
import { ParticipantGetByPlaydayRepository } from './repository/get-by-playday-repository';

@Controller('participant')
export class ParticipantController {
  constructor(
    private readonly repository: ParticipantGetByPlaydayRepository
  ) {}
  
  @Get(':playdayId')
  async getById(@Param('playdayId') playdayId: string): Promise<Participant[]> {
    return this.repository.getAll(playdayId);
  }
}
