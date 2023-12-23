import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { AirService } from '../air/air.service';
import * as cron from 'node-cron';

@Injectable()
export class TelegramService {
  private bot;

  constructor(private readonly airService: AirService) {
    this.bot = new TelegramBot(
      '6927664692:AAEvHK3pgIY0YXremYyCcPOQz-WRWQPOY64',
      { polling: true },
    );

    this.report();

    cron.schedule('1 7-23 * * *', async () => {
      this.report();
    });
  }

  private async report() {
    const ownChatId = -1002072527250;
    const result = await this.airService.findCountry();
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
