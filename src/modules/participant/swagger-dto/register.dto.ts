import { ApiProperty } from '@nestjs/swagger'
import { Participant } from '@prisma/client'

export class RegisterDto implements Pick<Participant, 'email'> {
  @ApiProperty({
    type: String,
  })
  email: string
}
