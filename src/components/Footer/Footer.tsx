import { ReactNode, FC, HTMLProps } from 'react';
import { Footer as StyledFooter } from './Footer.styled';

interface FooterProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children, ...args }) => {
  return <StyledFooter {...args}>{children}</StyledFooter>;
};
