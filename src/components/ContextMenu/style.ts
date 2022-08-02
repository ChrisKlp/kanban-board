import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import { ContextMenuProps } from '.';

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
    margin-right: -1rem;
    padding: 0 1rem;
    cursor: pointer;

    @media (${theme.media.md}) {
    }
  `};
`;

const contentVariants = {
  board: (theme: DefaultTheme) => css`
    right: 0;
    margin-top: 1.6rem;

    @media (${theme.media.md}) {
      margin-top: 2.6rem;
    }

    @media (${theme.media.lg}) {
      margin-top: 3.6rem;
    }
  `,
  task: () => css`
    transform: translateX(-50%);
    left: 1rem;
    margin-top: 1.6rem;
  `,
};

export const Content = styled.ul<Pick<ContextMenuProps, 'variant'>>`
  ${({ theme, variant }) => css`
    position: absolute;
    top: 100%;
    padding: 1.6rem;
    min-width: 19.2rem;
    display: grid;
    gap: 1.6rem;
    background-color: ${theme.colors.contextMenu.bg};
    border-radius: 0.8rem;
    animation: ${fadeIn} ${theme.transition.fast};
    z-index: 10;

    ${!!variant && contentVariants[variant](theme)}
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
