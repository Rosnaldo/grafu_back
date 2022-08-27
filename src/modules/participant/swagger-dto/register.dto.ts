import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({
    type: String,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  userId: string;
}
