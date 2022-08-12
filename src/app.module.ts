import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ParticipantModule } from './modules/participant/participant.module'
import { PlaydayModule } from './modules/playday/playday.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PlaydayModule,
    ParticipantModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
