import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsUUID, ValidateIf } from 'class-validator'

export class UpdateToConfirmedDto {
  @ApiProperty({
    type: String,
  })
  @IsUUID()
  playdayId: string

  @ApiProperty({
    type: String,
    default: null,
  })
  @IsUUID()
  @ValidateIf((object, value) => value !== null)
  participantId: string | null

  @ApiProperty({
    type: String,
    default: null,
  })
  @IsEmail()
  @ValidateIf((object, value) => value !== null)
  email: string | null
}
