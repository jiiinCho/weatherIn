import { Fragment } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { ScreenReader } from '../ScreenReader';

interface IconProps extends FontAwesomeIconProps {
  title?: string;
}

export const Icon = ({ title = '', ...args }: IconProps) => {
  return (
    <Fragment>
      <FontAwesomeIcon {...args} aria-hidden={!title} />
      {title && <ScreenReader>{title}</ScreenReader>}
    </Fragment>
  );
};
