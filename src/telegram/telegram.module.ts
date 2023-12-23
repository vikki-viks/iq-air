import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { AirModule } from '../air/air.module';

@Module({
  imports: [AirModule],
  providers: [TelegramService],
})
export class TelegramModule {}
