import styled from 'styled-components';

export const Container = styled.div`
  height: 360px;
  padding: ${({ theme: { spacing } }) => `${spacing * 2}px`};
  border-radius: 8px;
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.grey}`};

  display: none;

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { sm },
      },
    }) => sm}) {
    display: flex;
  }

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    flex: 2;
  }
`;
