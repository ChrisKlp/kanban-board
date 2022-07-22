import styled, { css, DefaultTheme, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
`;

const optionVariants = {
  destructive: (theme: DefaultTheme) => css`
    color: ${theme.colors.red500};
  `,
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    margin-left: 0.6rem;
    margin-right: -1rem;
    padding: 0 1rem;
    cursor: pointer;

    @media (${theme.media.md}) {
      margin-left: 1.4rem;
    }

    @media (${theme.media.lg}) {
      margin-left: 1.4rem;
      margin-right: -0.2rem;
    }
  `};
`;

export const Content = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 1.6rem;
    padding: 1.6rem;
    min-width: 19.2rem;
    display: grid;
    gap: 1.6rem;
    background-color: ${theme.colors.bg.primary};
    border-radius: 0.8rem;
    animation: ${fadeIn} ${theme.transition.fast};
    z-index: 10;

    @media (${theme.media.md}) {
      margin-top: 2.6rem;
    }

    @media (${theme.media.lg}) {
      margin-top: 3.6rem;
    }
  `};
`;

export const Option = styled.li<{ variant?: 'destructive' }>`
  ${({ theme, variant }) => css`
    padding: 0 0.8rem;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: ${theme.colors.text.secondary};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.select.optionHover};
    }

    ${!!variant && optionVariants[variant](theme)}
  `};
`;
