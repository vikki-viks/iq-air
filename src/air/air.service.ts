import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AirService {
  constructor(private readonly httpService: HttpService) {}
  async findCountry(lat, lon): Promise<[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=7d0d88f9-a5e7-462d-9bb1-f16497751429`,
      ),
    );
    return data;
  }
}
