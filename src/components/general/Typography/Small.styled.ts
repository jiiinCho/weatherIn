import styled from 'styled-components';

const SmallBase = styled.p(
  ({
    theme: {
      typography: {
        body: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
  }),
);

export const Small = styled(SmallBase)`
  font-size: 14px;
`;
