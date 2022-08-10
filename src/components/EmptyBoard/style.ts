import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  gap: 2.4rem;
  height: 100%;

  & div:last-child {
    padding-right: 2.4rem;
  }
`;

export default Wrapper;
