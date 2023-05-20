import styled from 'styled-components';

export const Container = styled.div`
  flex: 2;
  height: 360px;
  padding: ${({ theme: { spacing } }) => `${spacing * 2}px`};
  border-radius: 8px;
  border: ${({
    theme: {
      palette: { common },
    },
  }) => `1px solid ${common.grey}`};
`;
