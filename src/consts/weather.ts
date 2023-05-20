import { WeatherIconNames, WeatherIconCode } from './types';

export const isValidWeatherIcon = (iconCode: any): iconCode is WeatherIconCode => {
  return WeatherIconNames.includes(iconCode);
};

export const LottieWeatherSource: Record<WeatherIconCode, string> & { error: string } = {
  '01': 'https://assets2.lottiefiles.com/private_files/lf30_6gqfjgqh.json',
  '02': 'https://assets10.lottiefiles.com/temp/lf20_dgjK9i.json',
  '03': 'https://assets6.lottiefiles.com/packages/lf20_KUFdS6.json',
  '04': 'https://assets10.lottiefiles.com/packages/lf20_trr3kzyu.json',
  '09': 'https://assets10.lottiefiles.com/packages/lf20_trr3kzyu.json',
  '10': 'https://assets9.lottiefiles.com/packages/lf20_bco9p3ju.json',
  '11': 'https://assets2.lottiefiles.com/private_files/lf30_LPtaP2.json',
  '13': 'https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json',
  '50': 'https://assets6.lottiefiles.com/temp/lf20_HflU56.json',
  error: 'https://assets7.lottiefiles.com/packages/lf20_bdnjxekx.json',
};
