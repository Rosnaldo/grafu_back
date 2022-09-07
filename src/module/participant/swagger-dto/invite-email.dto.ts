import { ApiProperty } from '@nestjs/swagger'
import { Participant } from '@prisma/client'
import { IsEmail, IsUUID } from 'class-validator'

export class InviteEmailDto implements Pick<Participant, 'email' & 'playday'> {
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
