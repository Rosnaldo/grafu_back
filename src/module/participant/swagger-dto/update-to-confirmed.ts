import { ApiProperty } from '@nestjs/swagger'

export class UpdateToConfirmedDto {
  @ApiProperty({
    type: String,
  })
  playdayId: string

  @ApiProperty({
    type: String,
  })
  participantId?: string

  @ApiProperty({
    type: String,
  })
  email?: string
}
