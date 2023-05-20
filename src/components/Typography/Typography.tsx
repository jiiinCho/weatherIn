import { ReactNode, FC, ParamHTMLAttributes } from 'react';
import { H1 as StyledH1 } from './H1.styled';
import { H2 as StyledH2 } from './H2.styled';
import { H3 as StyledH3 } from './H3.styled';
import { H4 as StyledH4 } from './H4.styled';
import { Body as StyledBody } from './Body.styled';
import { Small as StyledSmall } from './Small.styled';

interface TypographyProps extends ParamHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
export const H1: FC<TypographyProps> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export const H2: FC<TypographyProps> = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export const H3: FC<TypographyProps> = ({ children }) => {
  return <StyledH3>{children}</StyledH3>;
};

export const H4: FC<TypographyProps> = ({ children }) => {
  return <StyledH4>{children}</StyledH4>;
};

export const Body: FC<TypographyProps> = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

export const Small: FC<TypographyProps> = ({ children }) => {
  return <StyledSmall>{children}</StyledSmall>;
};
