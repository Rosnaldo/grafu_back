import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class UserRegisterDto implements Omit<User, 'id'> {
  @ApiProperty({
    type: String,
  })
  email: string

  @ApiProperty({
    type: String,
  })
  name: string

  @ApiProperty({
    type: String,
    default: null,
  })
  avatar: string | null

  @ApiProperty({
    type: Number,
    default: null,
  })
  age: number | null

  @ApiProperty({
    type: String,
    default: null,
  })
  profession: string | null
}
