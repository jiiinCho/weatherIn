import { ReactNode, FC, HTMLAttributes } from 'react';
import { CardLandscape as StyledCardLandscape } from './CardLandscape.styled';

interface CardLandscapeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardLandscape: FC<CardLandscapeProps> = ({ ...args }) => {
  return <StyledCardLandscape {...args}>CardLandscape</StyledCardLandscape>;
};
