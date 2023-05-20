import { FC } from 'react';
import { Spinner as StyledSpinner } from './Spinner.styled';

type SpinnerProps = {
  height?: string;
  width?: string;
  borderthickness?: string;
};
export const Spinner: FC<SpinnerProps> = ({
  height = '60px',
  width = '60px',
  borderthickness = '6px',
}) => {
  return <StyledSpinner height={height} width={width} borderthickness={borderthickness} />;
};
