import Heading from 'components/Heading';
import styled, { css } from 'styled-components';

export const Group = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;

  & button {
    flex: 1;
  }
`;

export const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    color: ${theme.colors.red500};
  `};
`;
