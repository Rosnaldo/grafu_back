import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsUrl, IsUUID, ValidateIf } from 'class-validator'

export class UpdateAvatarDto implements Pick<User, 'avatarUrl' | 'avatarUuid'> {
  @ApiProperty({
    type: String,
    default: null,
  })
  @IsUrl()
  @ValidateIf((object, value) => value !== null)
  avatarUrl: string | null

  @ApiProperty({
    type: String,
    default: null,
  })
  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  avatarUuid: string | null
}
