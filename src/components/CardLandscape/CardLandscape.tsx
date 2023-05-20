import { FC, HTMLAttributes } from 'react';
import { IconName } from '@fortawesome/free-solid-svg-icons';

import { Icon } from 'components/general';

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
  backgroundColor: string;
}

export const CardLandscape: FC<CardLandscapeProps> = ({
  icon,
  content,
  title,
  unit,
  backgroundColor,
}) => {
  return (
    <StyledCardLandscape backgroundColor={backgroundColor}>
      <Container style={{ justifyContent: 'space-between' }}>
        <Icon icon={icon} size="xl" />
        <Paragraph>{title}</Paragraph>
      </Container>
      <Container>
        <Content>{content}&nbsp;</Content>
        <Paragraph>{unit}</Paragraph>
      </Container>
    </StyledCardLandscape>
  );
};
