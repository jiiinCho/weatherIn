import styled from 'styled-components';

export const H2 = styled.h2(
  ({
    theme: {
      typography: {
        header2: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
  }),
);
