import { OpenWeatherResponse } from '../../consts';
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
    const data = formatCurrentWeather(currentWeather as OpenWeatherResponse);

    expect(data).not.toBeNull();
    expect(data!.latitude).toBe('59.3326');
    expect(data!.longitude).toBe('18.0649');
    expect(data!.city).toBe('Stockholm');
    expect(data!.temperature).toBe(kelvinToCelsius(285.92));
    expect(data!.icon).toBe('04');
    expect(data!.description).toBe('broken clouds');
    expect(data!.windSpeed).toBe(1.54);
    expect(data!.humidity).toBe(71);
  });
});
