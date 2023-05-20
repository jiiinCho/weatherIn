import { FC, HTMLAttributes } from 'react';
import { CardPortrait as StyledCardPortrait } from './CardPortrait.styled';

interface CardPortraitProps extends HTMLAttributes<HTMLDivElement> {}

export const CardPortrait: FC<CardPortraitProps> = () => {
  return <StyledCardPortrait>CardPortriat</StyledCardPortrait>;
};
