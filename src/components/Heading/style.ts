import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

type WrapperProps = Pick<HeadingProps, 'size' | 'variant'>;

const headingSizes = {
  small: () => css`
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.24rem;
  `,
  medium: () => css`
    font-size: 1.5rem;
    line-height: 1.9rem;
  `,
  large: () => css`
    font-size: 1.8rem;
    line-height: 2.3rem;
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: 1.8rem;
    line-height: 2.3rem;

    @media (${theme.media.md}) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (${theme.media.lg}) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
  `,
};

const headingVariants = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.secondary};
  `,
};

const Wrapper = styled.span<WrapperProps>`
  ${({ theme, size, variant }) => css`
    font-weight: 700;

    ${!!size && headingSizes[size](theme)}
    ${!!variant && headingVariants[variant](theme)}
  `};
`;

export default Wrapper;
