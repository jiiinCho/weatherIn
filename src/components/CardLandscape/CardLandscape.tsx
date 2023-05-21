import { FC, HTMLAttributes } from 'react';
import { IconName } from '@fortawesome/free-solid-svg-icons';

import { Icon, ScreenReader } from 'components/general';

import {
  CardLandscape as StyledCardLandscape,
  Paragraph,
  Container,
  Content,
} from './CardLandscape.styled';

interface CardLandscapeProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  title: string;
  content: string;
  unit: string;
  cardbackground: string;
  screenreader?: string;
}

export const CardLandscape: FC<CardLandscapeProps> = ({
  icon,
  content,
  title,
  unit,
  cardbackground,
  screenreader = '',
}) => {
  return (
    <StyledCardLandscape cardbackground={cardbackground}>
      <Container style={{ justifyContent: 'space-between' }}>
        <Icon icon={icon} size="xl" />
        <Paragraph>{title}</Paragraph>
      </Container>
      <Container>
        <Content>{content}&nbsp;</Content>
        {screenreader && <ScreenReader>{screenreader}</ScreenReader>}
        <Paragraph {...(screenreader && { 'aria-hidden': true })}>{unit}</Paragraph>
      </Container>
    </StyledCardLandscape>
  );
};
