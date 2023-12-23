import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { AirService } from '../air/air.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;

  constructor(private readonly airService: AirService) {
    this.bot = new TelegramBot(
      '6927664692:AAEvHK3pgIY0YXremYyCcPOQz-WRWQPOY64',
      { polling: true },
    );

    // this.report();
    this.bot.on('message', async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
      console.log(text);

      if (text.startsWith('/sendlocation')) {
        return this.bot.sendMessage(
          chatId,
          'Send me you coordinates like: 44.8401603,20.4034186',
        );
      }
      const arr = text.split(',');
      if (
        arr.length === 2 &&
        !Number.isNaN(Number(arr[0])) &&
        !Number.isNaN(Number(arr[1]))
      ) {
        try {
          return await this.report(arr[0], arr[1]);
        } catch (error) {
          return await this.bot.sendMessage(chatId, 'Server error');
        }
      }
      return this.bot.sendMessage(chatId, 'I dont understand');
    });
  }

  @Cron('1 7-23 * * *')
  private async report(lat, lon) {
    const ownChatId = -1002072527250;
    const result = await this.airService.findCountry(lat, lon);
    const index = (result as any).data.current.pollution.aqius;
    console.log(result);
    if (index < 100) {
      this.bot.sendMessage(
        ownChatId,
        `Воздух норм, проветри\nИндекс: ${index}`,
      );
    } else {
      this.bot.sendMessage(ownChatId, `Закрывай окна\nИндекс: ${index}`);
    }
  }
}
