import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: minmax(1em, auto) 1fr auto minmax(1em, auto);

  @supports not (display: grid) {
    max-width: 50em;
    margin: 0 auto;
  }
`;
