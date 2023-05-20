import styled from 'styled-components';

const InputBase = styled.input(
  ({
    theme: {
      spacing,
      palette: { common },
    },
  }) => ({
    paddingTop: spacing,
    paddingBottom: spacing,
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
        breakpoints: { lg },
      },
    }) => lg}) {
    padding-top: ${({ theme: { spacing } }) => spacing * 2}px;
    padding-bottom: ${({ theme: { spacing } }) => spacing * 2}px;
    padding-left: ${({ theme: { spacing } }) => spacing * 4}px;
    padding-right: ${({ theme: { spacing } }) => spacing * 4}px;
  }
`;
