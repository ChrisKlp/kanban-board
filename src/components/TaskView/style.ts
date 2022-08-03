import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  & > h2 {
    flex: 1 0 0%;
    padding-right: 5%;
  }
`;

export const SubtasksWrapper = styled.div`
  display: grid;
  gap: 0.8rem;

  & > p {
    margin-bottom: 0.8rem;
  }
`;

export const StatusWrapper = styled.div`
  display: grid;
  gap: 0.8rem;
`;
