export type OpenMeteoResponse = {
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};

export type LineChartDataT = {
  id: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
};

export const WeatherIconNames = [
  '01d',
  '02d',
  '03d',
  '04d',
  '09d',
  '10d',
  '11d',
  '13d',
  '50d',
] as const;
export type WeatherIconCode = (typeof WeatherIconNames)[number];

type OpenWeatherList = {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherIconCode;
  }[];
};

export type OpenWeatherResponse = {
  list: OpenWeatherList[];
};

export type CurrentWeather = {
  latitude: string;
  longitude: string;
  city: string;
  temperature: number;
  icon: any;
  description: string;
  windSpeed: number;
  humidity: number;
};
