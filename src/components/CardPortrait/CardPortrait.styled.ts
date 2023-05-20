import styled from 'styled-components';

export const CardPortrait = styled.div`
  flex: 1;
  height: 360px;
  padding: ${({ theme: { spacing } }) => `${spacing * 3}px`};
  border-radius: 8px;
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.grey}`};
`;

export const Container = styled.div`
  text-align: center;
`;

export const Temperature = styled.p(
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

const DescriptionBase = styled.p(
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

export const Description = styled(DescriptionBase)`
  font-size: 18px;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    font-size: 24px;
  }
`;
