import { Controller, Get, Inject, Param } from '@nestjs/common'
import { Participant } from '@prisma/client'
import { ParticipantGetAllRepository } from '../repository/get-all-repository'

@Controller('participant')
export class ParticipantFindAllByPlaydayController {
  constructor(
    private readonly repository: ParticipantGetAllRepository,
  ) {}
  
  @Get(':playdayId')
  async execute(@Param('playdayId') playdayId: string): Promise<Participant[]> {
    return this.repository.execute(
    {
      playdayId,
    },
    {
      user: true
    })
  }
}
