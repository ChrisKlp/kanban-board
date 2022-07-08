import Wrapper from './style';

export type TextProps = {
  size?: 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

function Text({
  className,
  children,
  as,
  size = 'medium',
  variant = 'primary',
}: TextProps) {
  return (
    <Wrapper as={as} size={size} variant={variant} className={className}>
      {children}
    </Wrapper>
  );
}

export default Text;
