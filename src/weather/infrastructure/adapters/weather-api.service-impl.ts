import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IWeatherApiService } from 'src/weather/application/ports/weather-api.service-interface';
import { AverageResponseDto } from 'src/weather/presentation/dtos/average.response.dto';
import { WeatherResponseDto } from 'src/weather/presentation/dtos/weather.response.dto';

@Injectable()
export class WeatherApiService implements IWeatherApiService {
  constructor(public readonly httpService: HttpService) {}

  async getCityWeather(city: string): Promise<WeatherResponseDto> {
    const url = `${process.env.WEATHER_API_BASE_URL}weather?q=${city}&APPID=${process.env.WEATHER_API_TOKEN}`;

    return await this.httpService.axiosRef
      .get(url)
      .then((response) => {
        return this.responseToDto(response);
      })
      .catch((err) => {
        console.error(err);
        return err.message;
      });
  }

  async getAverageWeather(city: string): Promise<AverageResponseDto> {
    const response = await this.getCityWeather(city);
    const avg = new AverageResponseDto();
    avg.average = (response.max_temp + response.min_temp) / 2;
    return avg;
  }

  private responseToDto(response): WeatherResponseDto {
    const data = new WeatherResponseDto();
    data.city_name = response.data.name;
    data.temp = response.data.main.temp;
    data.feels_like = response.data.main.feels_like;
    data.humidity = response.data.main.humidity;
    data.min_temp = response.data.main.temp_min;
    data.max_temp = response.data.main.temp_max;
    data.wind_speed = response.data.wind.speed;
    data.wind_degrees = response.data.wind.deg;
    data.sunrise = response.data.sys.sunrise;
    data.sunset = response.data.sys.sunset;
    return data;
  }
}
