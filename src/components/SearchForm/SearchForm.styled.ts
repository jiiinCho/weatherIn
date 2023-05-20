import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const paragraphBase = styled.p(
  ({
    theme: {
      palette: {
        common: { grey },
      },
      typography: {
        header4: { fontFamily, fontWeight },
      },
    },
  }) => ({
    fontFamily,
    fontWeight,
    color: grey,
  }),
);

export const Paragraph = styled(paragraphBase)`
  font-size: 18px;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { xl },
      },
    }) => xl}) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  display: inline-block;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    display: flex;
    align-items: center;
  }
`;
