import { ApiProperty } from "@nestjs/swagger";

export class InviteEmailDto {
  @ApiProperty({
    type: String,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  playdayId: string;
}
