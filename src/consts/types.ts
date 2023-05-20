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

export const WeatherIconNames = ['01', '02', '03', '04', '09', '10', '11', '13', '50'] as const;
export type WeatherIconCode = (typeof WeatherIconNames)[number];

export type OpenWeatherResponse = {
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
