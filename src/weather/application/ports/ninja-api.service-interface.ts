import { WeatherResponseDto } from 'src/weather/presentation/dtos/weather.response.dto';

export interface INinjaApiService {
  getCityWeather(city: string): Promise<WeatherResponseDto>;
}
