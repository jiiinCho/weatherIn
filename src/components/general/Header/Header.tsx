import { ReactNode, FC, HTMLAttributes } from 'react';
import { Header as StyledHeader } from './Header.styled';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children, ...args }) => {
  return <StyledHeader {...args}>{children}</StyledHeader>;
};
