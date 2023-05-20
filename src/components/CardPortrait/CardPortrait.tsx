import { FC, HTMLAttributes } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import {
  CardPortrait as StyledCardPortrait,
  Container,
  Description,
  Temperature,
} from './CardPortrait.styled';
import { LottieWeatherSource, isValidWeatherIcon } from '../../consts';

interface CardPortraitProps extends HTMLAttributes<HTMLDivElement> {
  temperature: number;
  icon: string;
  description: string;
}

export const CardPortrait: FC<CardPortraitProps> = ({ temperature, icon, description }) => {
  const weatherIcon = isValidWeatherIcon(icon) ? icon : 'error';

  return (
    <StyledCardPortrait>
      <Player
        src={LottieWeatherSource[weatherIcon]}
        className="player"
        loop
        autoplay
        style={{ height: '180px', width: '180px' }}
      />
      <Container>
        <Temperature>{temperature} &#8451;</Temperature>
        <Description>{description}</Description>
      </Container>
    </StyledCardPortrait>
  );
};
