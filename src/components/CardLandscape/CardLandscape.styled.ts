import styled from 'styled-components';

type CardLandscapeProps = {
  backgroundColor: string;
};

export const CardLandscape = styled.div<CardLandscapeProps>`
  flex: 1;
  padding: ${({ theme: { spacing } }) => `${spacing * 3}px`};
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.grey}`};
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
