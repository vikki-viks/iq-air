import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [HttpModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
