import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${({ theme: { spacing } }) => `${spacing * 2}px`};
  display: flex;
  gap: 16px;
  flex: 1;
`;
