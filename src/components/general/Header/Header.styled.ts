import styled from 'styled-components';

export const Header = styled.header`
  grid-column: span 12;
  padding: ${({ theme: { spacing } }) => `${spacing * 2}px`};

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    padding: ${({ theme: { spacing } }) => `${spacing * 4}px ${spacing * 6}px`};
  }
`;
