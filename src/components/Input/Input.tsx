import { FC, InputHTMLAttributes } from 'react';
import { Input as StyledInput } from './Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...args }) => {
  return <StyledInput {...args} />;
};
