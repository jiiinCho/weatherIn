import styled from 'styled-components';

const H4Base = styled.h4(
  ({
    theme: {
      typography: {
        header4: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
  }),
);

export const H4 = styled(H4Base)`
  font-size: 18px;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    font-size: 24px;
  }
`;
