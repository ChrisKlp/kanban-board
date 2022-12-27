import Heading from 'components/Heading';
import styled, { css } from 'styled-components';
import { columnHeaderColors } from 'styles/theme';

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
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: start;

  ${({ newColumn }) =>
    newColumn &&
    css`
      padding-top: 3.9rem;
      width: 28rem;
      grid-template-rows: 1fr;
    `};
`;

export const Header = styled(Heading).attrs({
  size: 'small',
  variant: 'secondary',
})<{ index: number }>`
  ${({ index }) => css`
    display: flex;
    gap: 1.2rem;
    margin-bottom: 2.4rem;

    &::before {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${columnHeaderColors[
        index % columnHeaderColors.length
      ]};
      content: '';
    }
  `};
`;

export const TaskList = styled.ul`
  display: grid;
  height: 100%;
  align-content: start;
  width: 28rem;
`;

export const NewColumnButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 18.6rem);
    height: calc(100% - 2rem);
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
