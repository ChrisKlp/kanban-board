import Heading from 'components/Heading';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex-shrink: 0;
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

export const Task = styled.li`
  ${({ theme }) => css`
    padding: 2.3rem 1.6rem;
    display: grid;
    gap: 0.8rem;
    background-color: ${theme.colors.bg.primary};
    box-shadow: ${theme.shadow.medium};
    border-radius: 0.8rem;
  `}
`;
