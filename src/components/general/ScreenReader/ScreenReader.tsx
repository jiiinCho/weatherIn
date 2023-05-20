import { ReactNode, FC, HTMLAttributes } from 'react';
import { ScreenReader as StyledScreenReader } from './ScreenReader.styles';

interface ScreenReaderProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const ScreenReader: FC<ScreenReaderProps> = ({ children }) => {
  return <StyledScreenReader>{children}</StyledScreenReader>;
};
