import { ReactNode, FC, HTMLAttributes } from 'react';
import { Footer as StyledFooter } from './Footer.styled';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children, ...args }) => {
  return <StyledFooter {...args}>{children}</StyledFooter>;
};
