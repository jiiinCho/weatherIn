import styled from 'styled-components';

export const Footer = styled.footer`
  grid-column: span 8;
  text-align: end;
  padding: ${({ theme: { spacing } }) => `${spacing * 2}px`};
  border-top: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.dark}`};
`;
