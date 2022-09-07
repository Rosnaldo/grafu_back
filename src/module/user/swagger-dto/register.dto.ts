import { ApiProperty } from '@nestjs/swagger'
import { IsAlpha, IsEmail, IsNumber, IsUrl, ValidateIf } from 'class-validator'
import { User } from '@prisma/client'

export class UserRegisterDto implements Omit<User, 'id'> {
  @ApiProperty({
    type: String,
  })
  @IsEmail()
  email: string

  @ApiProperty({
    type: String,
  })
  @IsAlpha()
  name: string

  @ApiProperty({
    type: String,
    default: null,
  })
  @IsUrl()
  @ValidateIf((object, value) => value !== null)
  avatar: string | null

  @ApiProperty({
    type: Number,
    default: null,
  })
  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  age: number | null

  @ApiProperty({
    type: String,
    default: null,
  })
  @ValidateIf((object, value) => value !== null)
  profession: string | null
}
