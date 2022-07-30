import styled, { css } from 'styled-components';
import iconShowSidebar from 'assets/icon-show-sidebar.svg';

export const Wrapper = styled.div`
  position: relative;
`;
export const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    @media (${theme.media.md}) {
      margin-left: ${isOpen ? '26rem' : 0};
    }
  `};
`;

export const SidebarToggle = styled.button`
  ${({ theme }) => css`
    display: none;
    position: fixed;
    left: 0;
    bottom: 3.2rem;
    width: 5.6rem;
    height: 4.8rem;
    border-radius: 0 10rem 10rem 0;
    background-color: ${theme.colors.purple500};
    background-image: url(${iconShowSidebar});
    background-repeat: no-repeat;
    background-position: 1.8rem center;
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.purple300};
    }

    @media (${theme.media.md}) {
      display: block;
    }
  `};
`;

export const MainWrapper = styled.main`
  overflow: auto;
  /* padding-left: 1.6rem; */
  /* padding-top: 2.4rem; */
`;
