import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { AppService } from 'src/app.service';
import { HttpService } from '@nestjs/axios';

@Module({
  providers: [TelegramService, AppService],
})
export class TelegramModule {}
