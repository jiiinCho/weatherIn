import { Logo as StyledLogo } from './Logo.styled';
import logo from '../../asset/logo_default.svg';
import hoverLogo from '../../asset/logo_hover.svg';

export const Logo = () => {
  return <StyledLogo role="img" aria-label="logo" background={logo} hover={hoverLogo} />;
};
