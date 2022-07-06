import styled, { css, DefaultTheme } from 'styled-components';
import { TextProps } from '.';

type WrapperProps = Pick<TextProps, 'size' | 'variant'>;

const textSizes = {
  medium: () => css`
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
  `,
  large: () => css`
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
  `,
};

const textVariants = {
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.dark};
  `,
  grey: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.grey};
  `,
};

const Wrapper = styled.p<WrapperProps>`
  ${({ theme, size, variant }) => css`
    ${!!size && textSizes[size]}
    ${!!variant && textVariants[variant](theme)}
  `};
`;

export default Wrapper;
