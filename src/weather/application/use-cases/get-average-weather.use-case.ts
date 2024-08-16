import { Inject, Injectable } from '@nestjs/common';
import { IWeatherApiService } from '../ports/weather-api.service-interface';
import { AverageResponseDto } from 'src/weather/presentation/dtos/average.response.dto';

@Injectable()
export class GetAverageWeatherUseCase {
  constructor(
    @Inject('IWeatherApiService')
    private readonly externalApiService: IWeatherApiService,
  ) {}

  async execute(city: string): Promise<AverageResponseDto> {
    return this.externalApiService.getAverageWeather(city);
  }
}
