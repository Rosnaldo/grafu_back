import { ApiProperty } from "@nestjs/swagger";

export class UserRegisterDto {
  @ApiProperty({
    type: String,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  avatar: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  age?: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  profession?: string;
}
