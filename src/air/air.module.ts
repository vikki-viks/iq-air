import { Module } from '@nestjs/common';
import { AirService } from './air.service';
import { AirController } from './air.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AirController],
  providers: [AirService],
  exports: [AirService],
})
export class AirModule {}
