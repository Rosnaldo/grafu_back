import { Module } from '@nestjs/common';
import { PlaydayController } from './playday.controller';

@Module({
  imports: [],
  controllers: [PlaydayController],
  providers: [],
})
export class UserModule {}
