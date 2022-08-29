import { ApiProperty } from '@nestjs/swagger'
import { Participant } from '@prisma/client'

export class InviteEmailDto implements Pick<Participant, 'email' & 'playday'> {
  @ApiProperty({
    type: String,
  })
  email: string

  @ApiProperty({
    type: String,
  })
  playdayId: string
}
