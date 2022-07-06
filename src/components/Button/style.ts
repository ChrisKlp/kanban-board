import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, 'size' | 'variant'>;

const buttonSizes = {
  small: () => css`
    padding: 0.9rem 1.8rem;
    font-size: 1.3rem;
    line-height: 2.3rem;
  `,
  large: () => css`
    padding: 1.5rem 1.8rem;
    font-size: 1.5rem;
    line-height: 1.9rem;
  `,
};

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.button.primary};
    color: ${theme.colors.button.primaryText};

    &:hover {
      background-color: ${theme.colors.button.primaryHover};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.button.secondary};
    color: ${theme.colors.button.secondaryText};

    &:hover {
      background-color: ${theme.colors.button.secondaryHover};
    }
  `,
  destructive: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.button.destructive};
    color: ${theme.colors.button.destructiveText};

    &:hover {
      background-color: ${theme.colors.button.destructiveHover};
    }
  `,
};

const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, variant }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.8rem;
    background-color: ${theme.colors.button.primary};
    color: ${theme.colors.button.primaryText};
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2.3rem;
    border-radius: 3em;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    ${!!size && buttonSizes[size]}
    ${!!variant && buttonVariants[variant](theme)}
  `};
`;

export default Wrapper;
