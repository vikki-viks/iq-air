import { Controller, Get } from '@nestjs/common';
import { AirService } from '../air/air.service';

@Controller()
export class AirController {
  constructor(private readonly airService: AirService) {}

  @Get('country')
  getAll() {
    return this.airService.findCountry();
  }
}
