import { Body, Controller, Param, Put, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter';

import { UpdateAvatarDto } from '../../swagger-dto/update-avatar.dto';
import { UserUpdateUseCase } from '../../use-case/update-user';

@ApiTags('user')
@UsePipes(ValidationPipe)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('user')
export class UserUpdateAvatarController {
  constructor(
    private readonly userUpdateUseCase: UserUpdateUseCase,
  ) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateAvatarDto,
  ): Promise<void> {
    await this.userUpdateUseCase.execute(
      'fcae0492-0e36-49d0-a674-932c547e81d0',
      { id },
      {
        avatarUrl: body.avatarUrl,
        avatarUuid: body.avatarUuid,
      },
    );
  }
}
