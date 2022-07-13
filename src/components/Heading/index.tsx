import Wrapper from './style';

export type HeadingProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

function Heading({
  className,
  children,
  as,
  size = 'large',
  variant = 'primary',
}: HeadingProps) {
  return (
    <Wrapper className={className} as={as} size={size} variant={variant}>
      {children}
    </Wrapper>
  );
}

export default Heading;
