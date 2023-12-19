import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { AppService } from 'src/app.service';

@Injectable()
export class TelegramService {
  constructor(private readonly appService: AppService) {
    const bot = new TelegramBot(
      '6927664692:AAEvHK3pgIY0YXremYyCcPOQz-WRWQPOY64',
      { polling: true },
    );

    bot.setMyCommands([{ command: '/getData', description: 'get data' }]);

    bot.on('message', async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;

      if (text === '/getData') {
        return bot.sendMessage(
          chatId,
          JSON.stringify(await this.appService.findCountry()),
        );
      }
      return bot.sendMessage(chatId, 'Я Вас не понимаю');
    });
  }
}
