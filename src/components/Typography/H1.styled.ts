import styled from 'styled-components';

const H1Base = styled.h1(
  ({
    theme: {
      typography: {
        header1: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
  }),
);

export const H1 = styled(H1Base)`
  font-size: 48px;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    font-size: 54px;
  }

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    font-size: 64px;
  }
`;
