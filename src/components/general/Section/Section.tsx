import { ReactNode, FC, HTMLAttributes } from 'react';
import { Section as StyledSection } from './Section.styled';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ children, ...args }) => {
  return <StyledSection {...args}>{children}</StyledSection>;
};
