import { ReactNode, FC, HTMLProps } from 'react';
import { Layout as StyledLayout } from './Layout.styled';

interface LayoutProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, ...args }) => {
  return <StyledLayout {...args}>{children}</StyledLayout>;
};
