import { WeatherIconNames, WeatherIconCode } from './types';

export const isValidWeatherIcon = (iconCode: any): iconCode is WeatherIconCode => {
  return WeatherIconNames.includes(iconCode);
};

export const LottieWeatherSource: Record<WeatherIconCode, string> & { error: string } = {
  '01d': 'https://assets2.lottiefiles.com/private_files/lf30_6gqfjgqh.json',
  '02d': 'https://assets10.lottiefiles.com/temp/lf20_dgjK9i.json',
  '03d': 'https://assets6.lottiefiles.com/packages/lf20_KUFdS6.json',
  '04d': 'https://assets10.lottiefiles.com/packages/lf20_trr3kzyu.json',
  '09d': 'https://assets10.lottiefiles.com/packages/lf20_trr3kzyu.json',
  '10d': 'https://assets9.lottiefiles.com/packages/lf20_bco9p3ju.json',
  '11d': 'https://assets2.lottiefiles.com/private_files/lf30_LPtaP2.json',
  '13d': 'https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json',
  '50d': 'https://assets6.lottiefiles.com/temp/lf20_HflU56.json',
  error: 'https://assets7.lottiefiles.com/packages/lf20_bdnjxekx.json',
};
