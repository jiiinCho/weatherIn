import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    base: { primary: '#2C24F5', secondary: '#F4B5BD', tertiary: '#D3BEF3' },
    common: { dark: '#0D0D0D', grey: '#949494', light: '#FEFEFE' },
  },
  typography: {
    header1: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400 },
    header2: { fontFamily: 'Roboto, sans-serif', fontWeight: 400 },
    header3: { fontFamily: 'Roboto, sans-serif', fontWeight: 400 },
    header4: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500 },
    body: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400 },
    button: { fontFamily: 'Roboto, sans-serif', fontWeight: 500 },
    small: { fontFamily: 'Roboto, sans-serif', fontWeight: 500 },
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '62em',
    lg: '75em',
  },
  spacing: 8,
};
