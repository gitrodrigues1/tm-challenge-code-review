import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { GetCityWeatherUseCase } from '../../application/use-cases/get-city-weather.use-case';
import { GetCitiesWeatherUseCase } from 'src/weather/application/use-cases/get-cities-weather.use-case';
import { WeatherResponseDto } from '../dtos/weather.response.dto';
import { GetAverageWeatherUseCase } from 'src/weather/application/use-cases/get-average-weather.use-case';
import { AverageResponseDto } from '../dtos/average.response.dto';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly getCityWeatherUseCase: GetCityWeatherUseCase,
    private readonly getCitiesWeatherUseCase: GetCitiesWeatherUseCase,
    private readonly getAverageWeatherUseCase: GetAverageWeatherUseCase,
  ) {}

  @Get('/city/:name')
  async getCity(@Param('name') name: string): Promise<WeatherResponseDto> {
    try {
      return await this.getCityWeatherUseCase.execute(name);
    } catch (err) {
      throw new NotFoundException(`Error with request: ${err}`);
    }
  }

  @Get('/cities')
  async getCities(
    @Query() body: { cities: string[] },
  ): Promise<WeatherResponseDto[]> {
    const { cities } = body;
    return await this.getCitiesWeatherUseCase.execute(cities);
  }

  @Get('/average/:name')
  async getAverage(@Param('name') city: string): Promise<AverageResponseDto> {
    return await this.getAverageWeatherUseCase.execute(city);
  }
}
