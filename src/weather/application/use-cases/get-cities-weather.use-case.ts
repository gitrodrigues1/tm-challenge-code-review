import { Inject, Injectable } from '@nestjs/common';
import { INinjaApiService } from '../ports/ninja-api.service-interface';

@Injectable()
export class GetCitiesWeatherUseCase {
  constructor(
    @Inject('INinjaApiService')
    private readonly externalApiService: INinjaApiService,
  ) {}

  async execute(cities: string[]) {
    const requests = cities.map((city) => {
      return this.externalApiService.getCityWeather(city);
    });
    const response = await Promise.all(requests);
    return response;
  }
}
