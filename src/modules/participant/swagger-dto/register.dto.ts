import { ApiProperty } from '@nestjs/swagger'
import { Participant } from '@prisma/client'

export class RegisterDto implements Pick<Participant, 'email' | 'playdayId'> {
  @ApiProperty({
    type: String,
  })
  email: string

  @ApiProperty({
    type: String,
  })
  playdayId: string
}
