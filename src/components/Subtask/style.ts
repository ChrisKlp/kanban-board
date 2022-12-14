import styled, { css } from 'styled-components';
import iconCheck from 'assets/icon-check.svg';
import Text from 'components/Text';

export const Checkbox = styled.span`
  ${({ theme }) => css`
    flex-shrink: 0;
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border: 1px solid ${theme.colors.grey600}25;
    background-color: ${theme.colors.bg.primary};
    border-radius: 0.2rem;
  `};
`;

export const Label = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `};
`;

export const Wrapper = styled.div<{ checked: boolean }>`
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
        text-decoration: line-through;
        opacity: 0.5;
      }

      ${Checkbox} {
        background-color: ${theme.colors.subtask.checkboxChecked};
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
