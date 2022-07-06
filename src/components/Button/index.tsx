import { ButtonHTMLAttributes } from 'react';
import Wrapper from './style';

export type ButtonProps = {
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary' | 'destructive';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  size = 'small',
  variant = 'primary',
}: ButtonProps) {
  return (
    <Wrapper size={size} variant={variant}>
      {children}
    </Wrapper>
  );
}

export default Button;
