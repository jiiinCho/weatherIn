import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${({ theme: { spacing } }) => `${spacing * 2}px`};
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    flex-direction: row;
  }
`;
