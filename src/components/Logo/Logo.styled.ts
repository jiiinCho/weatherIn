import styled from 'styled-components';

interface LogoProps {
  background: string;
  hover: string;
}

export const Logo = styled.div<LogoProps>`
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  height: 28px;
  width: 52px;
  background-size: cover;

  &:hover {
    background: ${(props) => `url(${props.hover}) no-repeat top center`};
  }
`;
