import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import styles from './Icon.module.css';

type IconProps = {
  name: IconName;
  title?: string;
};

export const Icon = ({ name, title = '' }: IconProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={name} aria-hidden={!title} />
      {title && <span style={styles.srOnly}>{title}</span>}
    </div>
  );
};
