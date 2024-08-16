import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios/dist/http.module';
import { WeatherController } from './presentation/controllers/weather.controller';
import { WeatherApiService } from './infrastructure/adapters/weather-api.service-impl';
import { WeatherService } from './weather.service';
import { GetCityWeatherUseCase } from './application/use-cases/get-city-weather.use-case';
import { GetCitiesWeatherUseCase } from './application/use-cases/get-cities-weather.use-case';
import { NinjaApiService } from './infrastructure/adapters/ninja-api.service-impl';
import { GetAverageWeatherUseCase } from './application/use-cases/get-average-weather.use-case';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [
    WeatherService,
    GetCityWeatherUseCase,
    GetCitiesWeatherUseCase,
    GetAverageWeatherUseCase,
    {
      provide: 'IWeatherApiService',
      useClass: WeatherApiService,
    },
    {
      provide: 'INinjaApiService',
      useClass: NinjaApiService,
    },
  ],
})
export class WeatherModule {}
