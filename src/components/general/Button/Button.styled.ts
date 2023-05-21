import styled from 'styled-components';

const ButtonBase = styled.button(
  ({
    theme: {
      spacing,
      palette: { common },
      typography: {
        button: { fontFamily, fontWeight },
      },
    },
  }) => ({
    minWidth: '100px',
    minHeight: '36px',
    padding: spacing * 0.5,
    paddingLeft: spacing * 2,
    paddingRight: spacing * 2,
    backgroundColor: common.dark,
    color: common.light,
    borderRadius: spacing * 4,
    fontFamily,
    fontWeight,
    textTransform: 'uppercase',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: common.dark,
    cursor: 'pointer',
    margin: 0,
    textAlign: 'center',
  }),
);

export const Button = styled(ButtonBase)`
  &:hover {
    border-style: dashed;
    border-color: ${({
      theme: {
        palette: {
          common: { light },
        },
      },
    }) => light};
    background-color: ${({
      theme: {
        palette: {
          base: { primary },
        },
      },
    }) => primary};
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
    padding-left: ${({ theme: { spacing } }) => spacing * 4}px;
    padding-right: ${({ theme: { spacing } }) => spacing * 4}px;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
