import { Module } from '@nestjs/common';
import { AirService } from './air.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AirService],
  exports: [AirService],
})
export class AirModule {}
