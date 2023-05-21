import { FC, HTMLAttributes } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { Icon, ScreenReader } from 'components/general';
import { LottieWeatherSource, isValidWeatherIcon } from 'consts';

import {
  CardPortrait as StyledCardPortrait,
  Container,
  CityContainer,
  Description,
  Temperature,
  City,
} from './CardPortrait.styled';

interface CardPortraitProps extends HTMLAttributes<HTMLDivElement> {
  temperature: number;
  icon: string;
  description: string;
  city: string;
}

export const CardPortrait: FC<CardPortraitProps> = ({ temperature, icon, description, city }) => {
  const weatherIcon = isValidWeatherIcon(icon) ? icon : 'error';

  return (
    <StyledCardPortrait>
      <Container>
        <ScreenReader>Weather animated icon</ScreenReader>
        <Player
          src={LottieWeatherSource[weatherIcon]}
          className="player"
          loop
          autoplay
          style={{ height: '180px', width: '180px' }}
        />
        <CityContainer>
          <Icon icon="location-arrow" size="sm" />
          <City>&nbsp;{city}</City>
        </CityContainer>
      </Container>
      <Container>
        <Temperature>{temperature} &#8451;</Temperature>
        <Description>{description}</Description>
      </Container>
    </StyledCardPortrait>
  );
};
