import { Inject, Injectable } from '@nestjs/common';
import { IWeatherApiService } from '../ports/weather-api.service-interface';

@Injectable()
export class GetCityWeatherUseCase {
  constructor(
    @Inject('IWeatherApiService')
    private readonly externalApiService: IWeatherApiService,
  ) {}

  execute(city: string) {
    return this.externalApiService.getCityWeather(city);
  }
}
