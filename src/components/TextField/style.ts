import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

export const Wrapper = styled.div<Pick<TextFieldProps, 'error' | 'textarea'>>`
  ${({ theme, error, textarea }) => css`
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    height: 4rem;
    max-width: 48rem;
    border: 1px solid ${theme.colors.grey600}25;
    border-radius: 0.4rem;
    background-color: ${theme.colors.bg.primary};
    transition: border ${theme.transition.fast};

    &:hover {
      border: 1px solid ${theme.colors.purple500};
    }

    & :first-child {
      flex: 1;
    }

    ${textarea &&
    css`
      padding: 0.8rem 1.6rem;
      height: 11.2rem;
    `}

    ${error &&
    css`
      border: 1px solid ${theme.colors.red500};

      &:hover {
        border: 1px solid ${theme.colors.red500};
      }
    `}
  `};
`;

const text = css`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.3rem;
`;

export const Input = styled.input<{ as?: React.ElementType }>`
  ${({ theme, as }) => css`
    ${text}
    font-family: inherit;
    color: ${theme.colors.text.primary};
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.text.primary};
      opacity: 0.25;
    }

    ${as === 'textarea' &&
    css`
      resize: none;
      height: 100%;
    `}
  `};
`;

export const ErrorText = styled.span`
  ${({ theme }) => css`
    ${text}
    color: ${theme.colors.red500};
    white-space: nowrap;
  `};
`;
