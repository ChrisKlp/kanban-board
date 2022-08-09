import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 2.4rem;
`;

export const Group = styled.div`
  display: grid;
  gap: 0.8rem;
`;

export const ColumnsGroup = styled.div`
  display: grid;
  gap: 1.2rem;
`;

export const ColumnFieldGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    svg g {
      transition: fill ${theme.transition.fast};
    }

    &:hover {
      svg g {
        fill: ${theme.colors.red500};
      }
    }
  `};
`;
