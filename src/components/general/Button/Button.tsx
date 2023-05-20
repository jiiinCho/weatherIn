import { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import { Button as StyledButton } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...args }) => {
  return <StyledButton {...args}>{children}</StyledButton>;
};
