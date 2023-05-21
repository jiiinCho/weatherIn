import styled from 'styled-components';

const InputBase = styled.input(
  ({
    theme: {
      spacing,
      palette: { common },
    },
  }) => ({
    padding: spacing * 0.5,
    paddingLeft: spacing * 2,
    paddingRight: spacing * 2,
    borderRadius: spacing * 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: common.dark,
    margin: 0,
  }),
);

export const Input = styled(InputBase)`
  &:hover {
    border-style: dashed;
  }

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { md },
      },
    }) => md}) {
    padding-top: ${({ theme: { spacing } }) => spacing}px;
    padding-bottom: ${({ theme: { spacing } }) => spacing}px;
  }

  @media screen and (min-width: ${({
      theme: {
        breakpoints: { lg },
      },
    }) => lg}) {
    padding-top: ${({ theme: { spacing } }) => spacing}px;
    padding-bottom: ${({ theme: { spacing } }) => spacing}px;
    padding-left: ${({ theme: { spacing } }) => spacing * 2}px;
    padding-right: ${({ theme: { spacing } }) => spacing * 2}px;
  }
`;
