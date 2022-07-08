import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 48rem;
`;

export const Title = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    padding: 0.8rem 1.6rem 0.9rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    border: 1px solid
      ${isOpen ? theme.colors.purple500 : `${theme.colors.grey600}25`};
    border-radius: 0.4rem;
    background-color: ${theme.colors.subtask.checkbox};
    cursor: pointer;
    transition: border ${theme.transition.fast};

    &:hover {
      border: 1px solid ${theme.colors.purple500};
    }

    & :first-child {
      flex: 1;
    }

    & img {
      transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    }
  `};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

export const Content = styled.ul`
  ${({ theme }) => css`
    padding: 1.6rem 0.8rem;
    display: grid;
    gap: 0.8rem;
    background-color: ${theme.colors.subtask.checkbox};
    border-radius: 0.8rem;
    animation: ${fadeIn} ${theme.transition.fast};
  `};
`;

export const Option = styled.li`
  ${({ theme }) => css`
    padding: 0 0.8rem;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: ${theme.colors.text.secondary};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.grey100};
    }
  `};
`;
