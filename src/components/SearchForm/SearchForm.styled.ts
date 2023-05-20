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
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    align-items: center;
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  alignitems: center;
`;
