import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TelegramModule } from './telegram/telegram.module';
import { AirModule } from './air/air.module';

@Module({
  imports: [HttpModule, TelegramModule, AirModule],
})
export class AppModule {}
