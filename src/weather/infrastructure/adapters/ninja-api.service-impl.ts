import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { INinjaApiService } from 'src/weather/application/ports/ninja-api.service-interface';
import { WeatherResponseDto } from 'src/weather/presentation/dtos/weather.response.dto';

@Injectable()
export class NinjaApiService implements INinjaApiService {
  constructor(private readonly httpService: HttpService) {}

  async getCityWeather(city: string): Promise<WeatherResponseDto> {
    const url = `${process.env.NINJA_API_BASE_URL}/weather?city=${city}`;
    return await this.httpService.axiosRef
      .get(url, {
        headers: {
          'X-Api-Key': `${process.env.NINJA_API_KEY}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);

        return err.message;
      });
  }
}
