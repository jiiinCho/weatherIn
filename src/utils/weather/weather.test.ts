import { OpenWeatherResponse } from 'consts';
import { currentWeather, forecast } from './mock';
import { getLineChartData, formatCurrentWeather, kelvinToCelsius } from './weather';

describe('getLineChartData', () => {
  it('should format data from open meteo API to render line chart', () => {
    const data = getLineChartData(forecast, 'stockholm');

    expect(data[0].data).toHaveLength(24);
    expect(data[0].id).toEqual('stockholm');
    expect(data[0].data[0]).toEqual({ x: '1', y: 11.1 });
  });
});

describe('formatCurrentWeather', () => {
  it('should format weather data from open weather API', () => {
    const { latitude, longitude, city, temperature, icon, description, windSpeed, humidity } =
      formatCurrentWeather(currentWeather as OpenWeatherResponse);

    expect(latitude).toBe('51.5085');
    expect(longitude).toBe('-0.1258');
    expect(city).toBe('London');
    expect(temperature).toBe(kelvinToCelsius(280.15));
    expect(icon).toBe('50d');
    expect(description).toBe('mist');
    expect(windSpeed).toBe(4.6);
    expect(humidity).toBe(81);
  });
});
