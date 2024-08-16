import { AverageResponseDto } from 'src/weather/presentation/dtos/average.response.dto';
import { WeatherResponseDto } from 'src/weather/presentation/dtos/weather.response.dto';

export interface IWeatherApiService {
  getCityWeather(city: string): Promise<WeatherResponseDto>;
  getAverageWeather(city: string): Promise<AverageResponseDto>;
}
