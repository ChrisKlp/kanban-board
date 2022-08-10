import Heading from 'components/Heading';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2.4rem;

  & div:last-child {
    padding-right: 2.4rem;
  }
`;

export const ColumnWrapper = styled.div<{ newColumn?: boolean }>`
  flex-shrink: 0;

  ${({ newColumn }) =>
    newColumn &&
    css`
      padding-top: 3.9rem;
      width: 28rem;
    `};
`;

export const Header = styled(Heading).attrs({
  size: 'small',
  variant: 'secondary',
})`
  ${({ theme }) => css`
    display: flex;
    gap: 1.2rem;
    margin-bottom: 2.4rem;

    &::before {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.purple300};
      content: '';
    }
  `};
`;

export const TaskList = styled.ul`
  display: grid;
  gap: 2rem;
  width: 28rem;
`;

export const NewColumnButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 16.6rem);
    height: 100%;
    background: ${theme.colors.gradient.primary};
    border-radius: 0.6rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      & > span {
        color: ${theme.colors.purple500};
      }
    }
  `};
`;
