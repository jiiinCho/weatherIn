import styled from 'styled-components';

const BodyBase = styled.p(
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

export const Body = styled(BodyBase)`
  font-size: 16px;
`;
