import styled, { css } from 'styled-components';

const Wrapper = styled.li`
  ${({ theme }) => css`
    margin-bottom: 2rem;
    padding: 2.3rem 1.6rem;
    display: grid;
    gap: 0.8rem;
    background-color: ${theme.colors.bg.primary};
    box-shadow: ${theme.shadow.medium};
    border-radius: 0.8rem;
    cursor: pointer;
  `}
`;

export default Wrapper;
