import styled from 'styled-components';

export const H3 = styled.h3(
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
