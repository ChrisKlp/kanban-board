import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  z-index: 9999;
  overflow: auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2.4rem;
    padding: 2.4rem;
    width: 100%;
    max-width: 48rem;
    background-color: ${theme.colors.bg.primary};
    border-radius: 0.6rem;

    @media (${theme.media.md}) {
      padding: 3.2rem;
    }
  `};
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: ${theme.colors.black};
    opacity: 0.5;
  `};
`;
