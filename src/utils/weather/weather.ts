import { LineChartDataT, OpenMeteoResponse, OpenWeatherResponse, CurrentWeather } from 'consts';
import { theme } from '../../theme';

export const kelvinToCelsius = (kelvin: number) => {
  return Math.floor(kelvin - 273.15);
};

export const getLineChartData = (response: OpenMeteoResponse, city: string): LineChartDataT[] => {
  const {
    hourly: { temperature_2m: temperature },
  } = response;

  const convertedXY = temperature.map((temperatureItem, index) => ({
    x: (index + 1).toString(),
    y: temperatureItem,
  }));

  return [{ id: city, color: theme.palette.base.primary, data: convertedXY }];
};

export const formatCurrentWeather = (response: OpenWeatherResponse): CurrentWeather => {
  const {
    main: { temp, humidity },
    weather,
    coord: { lon, lat },
    name,
    wind: { speed },
  } = response.list[0];

  const { description, icon } = weather[0]; // primary info refer to docs

  return {
    latitude: lat.toString(),
    longitude: lon.toString(),
    city: name,
    temperature: kelvinToCelsius(temp),
    icon,
    description,
    windSpeed: speed,
    humidity,
  };
};
