import Heading from 'components/Heading';
import styled, { css } from 'styled-components';

export const Group = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    & button {
      flex: 1;
    }

    @media (${theme.media.md}) {
      flex-direction: row;
    }
  `};
`;

export const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    color: ${theme.colors.red500};
  `};
`;
