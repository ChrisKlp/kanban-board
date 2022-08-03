/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';
import Wrapper from './style';

export type ButtonProps = {
  size?: 'small' | 'large' | 'icon';
  variant?: 'primary' | 'secondary' | 'destructive';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  size = 'small',
  variant = 'primary',
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Wrapper
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
