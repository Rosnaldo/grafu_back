import { ApiProperty } from "@nestjs/swagger";

export class UpdateAvatarDto {
  @ApiProperty({
    type: String,
  })
  avatar: string;
}
