import Wrapper from './style';

export type HeadingProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: React.ElementType;
};

function Heading({
  children,
  as,
  size = 'large',
  variant = 'primary',
}: HeadingProps) {
  return (
    <Wrapper as={as} size={size} variant={variant}>
      {children}
    </Wrapper>
  );
}

export default Heading;
