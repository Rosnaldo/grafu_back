import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Playday } from '@prisma/client';
import { PlaydayGetByIdRepository } from './repository/get-by-id-repository';

@Controller('playday')
export class PlaydayController {
  constructor(
    private readonly repository: PlaydayGetByIdRepository
  ) {}
  
  @Get(':playdayId')
  async getById(@Param('playdayId') playdayId: string): Promise<Playday> {
    return this.repository.getById(playdayId);
  }
}
