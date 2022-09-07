import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsUrl, ValidateIf } from 'class-validator'

export class UpdateAvatarDto implements Pick<User, 'avatar'> {
  @ApiProperty({
    type: String,
    default: null,
  })
  @IsUrl()
  @ValidateIf((object, value) => value !== null)
  avatar: string | null
}
