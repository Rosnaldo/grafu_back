import { Module } from '@nestjs/common';
import { ParticipantModule } from './modules/participant/participant.module';
import { PlaydayModule } from './modules/playday/playday.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    PlaydayModule,
    ParticipantModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
