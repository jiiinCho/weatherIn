import styled from 'styled-components';

export const CardLandscape = styled.div`
  display: inline-block;
  padding: ${({ theme: { spacing } }) => `${spacing * 3}px`};
  border-radius: 8px;
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.dark}`};
`;
