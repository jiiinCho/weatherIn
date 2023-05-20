import styled from 'styled-components';

export const H3 = styled.h3(
  ({
    theme: {
      typography: {
        header3: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
    fontSize: '48px',
  }),
);
