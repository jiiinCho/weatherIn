import { Fragment } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { SrOnly } from './Icon.styled';

interface IconProps extends FontAwesomeIconProps {
  title?: string;
}

export const Icon = ({ title = '', ...args }: IconProps) => {
  return (
    <Fragment>
      <FontAwesomeIcon {...args} aria-hidden={!title} />
      {title && <SrOnly>{title}</SrOnly>}
    </Fragment>
  );
};
