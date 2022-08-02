import Select from 'components/Select';
import Text from 'components/Text';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;

    & > h2 {
      flex: 1;
    }
  `};
`;

export const Label = styled(Text).attrs({
  variant: 'secondary',
})``;

export const Description = styled(Text).attrs({
  size: 'large',
  variant: 'secondary',
})`
  margin-bottom: 2.4rem;
`;

export const SubtasksWrapper = styled.div`
  ${({ theme }) => css`
    margin: 1.6rem 0 2.4rem;
    display: grid;
    gap: 0.8rem;
  `};
`;

export const StatusSelect = styled(Select)`
  margin-top: 0.8rem;
`;
