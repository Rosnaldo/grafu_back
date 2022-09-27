import { ApiProperty } from '@nestjs/swagger'
import { Participant } from '@prisma/client'
import { IsEmail, IsUUID } from 'class-validator'

export class RegisterDto implements Pick<Participant, 'email' | 'playdayId'> {
  @ApiProperty({
    type: String,
  })
  @IsEmail()
  email: string

  @ApiProperty({
    type: String,
  })
  @IsUUID()
  playdayId: string
}
