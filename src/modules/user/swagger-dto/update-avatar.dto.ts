import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class UpdateAvatarDto implements Pick<User, 'avatar'> {
  @ApiProperty({
    type: String,
    default: null,
  })
  avatar: string | null
}
