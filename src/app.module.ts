import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TelegramModule } from './telegram/telegram.module';
import { AirModule } from './air/air.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    TelegramModule,
    AirModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
