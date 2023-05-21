import styled from 'styled-components';

type CardLandscapeProps = {
  cardbackground: string;
};

export const CardLandscape = styled.div<CardLandscapeProps>`
  flex: 1;
  padding: ${({ theme: { spacing } }) => `${spacing * 3}px`};
  border-radius: 8px;
  background-color: ${(props) => props.cardbackground};
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.grey}`};

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { xl },
      },
    }) => xl}) {
    display: flex;
    flex-direction: column;
    min-height: 220px;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.p(
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

const ParagraphBase = styled.p(
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

export const Paragraph = styled(ParagraphBase)`
  font-size: 18px;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    font-size: 24px;
  }
`;
