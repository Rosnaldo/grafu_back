import { Body, Controller, Param, Put, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter';

import { UserUpdateOneRepository } from '../../repository/update-one-repository';
import { GetUserCacheService } from '../../service/cache/get-user-cache.service';
import { ResetUserCacheService } from '../../service/cache/reset-user-cache.service';
import { UpdateAvatarDto } from '../../swagger-dto/update-avatar.dto';

@ApiTags('user')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('user')
export class UserUpdateAvatarController {
  constructor(
    private readonly repository: UserUpdateOneRepository,
    private readonly resetUserCache: ResetUserCacheService,
  ) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateAvatarDto,
  ): Promise<void> {
    const newUser = await this.repository.execute(
      { id },
      { avatar: body.avatar }
    )

    await this.resetUserCache.execute(newUser);
  }
}
