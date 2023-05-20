import { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import { Button as StyledButton, SpinnerContainer } from './Button.styled';
import { Spinner } from '../Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, loading = false, ...args }) => {
  return (
    <StyledButton {...args}>
      {loading ? (
        <SpinnerContainer>
          <Spinner height="20px" width="20px" borderthickness="3px" />
        </SpinnerContainer>
      ) : (
        children
      )}
    </StyledButton>
  );
};
