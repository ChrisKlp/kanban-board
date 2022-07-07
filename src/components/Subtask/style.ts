import styled, { css } from 'styled-components';
import iconCheck from 'assets/icon-check.svg';
import { SubtaskProps } from '.';

export const Checkbox = styled.span`
  ${({ theme }) => css`
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border: 1px solid ${theme.colors.grey600}25;
    background-color: ${theme.colors.subtask.checkbox};
    border-radius: 0.2rem;
  `};
`;

export const Label = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${theme.colors.subtask.label};
  `};
`;

export const Wrapper = styled.button<Pick<SubtaskProps, 'checked'>>`
  ${({ theme, checked }) => css`
    padding: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    max-width: 48rem;
    border-radius: 0.4rem;
    background-color: ${theme.colors.subtask.bg};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.subtask.bgHover};
    }

    ${!!checked &&
    css`
      ${Label} {
        color: ${theme.colors.subtask.labelActive};
        text-decoration: line-through;
      }

      ${Checkbox} {
        background-color: ${theme.colors.subtask.checkboxActive};
        border: none;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: '';
          background: url(${iconCheck}) no-repeat center;
        }
      }
    `}
  `};
`;
