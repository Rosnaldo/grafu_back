import { ApiProperty } from "@nestjs/swagger";

export class Dto {
  @ApiProperty({
    type: String,
  })
  avatar: string;
}
