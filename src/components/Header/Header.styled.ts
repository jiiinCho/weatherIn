import styled from 'styled-components';

export const Header = styled.header`
  grid-column: span 8;
  padding: ${({ theme: { spacing } }) => `${spacing * 2}px`};

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    padding: ${({ theme: { spacing } }) => `${spacing * 4}px ${spacing * 8}px`};
  }
`;
