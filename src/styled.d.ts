import 'styled-components';

interface IPalette {
  base: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  common: {
    dark: string;
    grey: string;
    light: string;
  };
}

interface ITypographyAttributes {
  fontFamily: string;
  fontWeight: number;
}

interface ITypography {
  header1: ITypographyAttributes;
  header2: ITypographyAttributes;
  header3: ITypographyAttributes;
  header4: ITypographyAttributes;
  body: ITypographyAttributes;
  button: ITypographyAttributes;
  small: ITypographyAttributes;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
    typography: ITypography;
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    spacing: number;
  }
}
