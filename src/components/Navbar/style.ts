import Button from 'components/Button';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    height: 6.4rem;
    background-color: ${theme.colors.bg.primary};
    z-index: 10;

    @media (${theme.media.md}) {
      padding: 0 2.4rem;
      height: 8.1rem;
      border-bottom: 1px solid ${theme.colors.navigation.border};
    }

    @media (${theme.media.lg}) {
      height: 9.5rem;
    }
  `};
`;

export const LogoWrapper = styled.div<{ isSidebarOpen: boolean }>`
  ${({ theme, isSidebarOpen }) => css`
    padding-right: 1.6rem;
    display: flex;
    align-items: center;
    height: 100%;

    @media (${theme.media.md}) {
      padding-right: 2.4rem;
      border-right: 1px solid ${theme.colors.navigation.border};
      display: ${isSidebarOpen ? 'none' : 'flex'};
    }

    @media (${theme.media.lg}) {
      padding-right: 3.2rem;
    }
  `};
`;

export const ContentWrapper = styled.div<{ isSidebarOpen: boolean }>`
  ${({ theme, isSidebarOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
    }

    & > h2 {
      display: none;
    }

    @media (${theme.media.md}) {
      padding-left: ${isSidebarOpen ? 0 : '2.4rem'};

      & > h2 {
        display: block;
      }
    }

    @media (${theme.media.lg}) {
      padding-left: ${isSidebarOpen ? 0 : '3.2rem'};
    }
  `};
`;

export const NavDropdown = styled.button`
  ${({ theme }) => css`
    margin-right: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    cursor: pointer;

    @media (${theme.media.md}) {
      display: none;
    }
  `};
`;

export const NewTaskButton = styled(Button).attrs({
  size: 'icon',
})`
  ${({ theme }) => css`
    & span {
      display: none;
    }

    @media (${theme.media.md}) {
      & span {
        display: block;
      }

      & img {
        display: none;
      }
    }
  `};
`;

export const NavigationMobileWrapper = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    margin-top: 1.6rem;
    top: 6.4rem;
    left: 5.6rem;
    right: 5.6rem;
    min-width: 22rem;
    background-color: ${theme.colors.bg.primary};
    border-radius: 0.8rem;
    box-shadow: ${theme.shadow.large};
    animation: ${fadeIn} ${theme.transition.default};
    z-index: 1;

    @media (${theme.media.md}) {
      display: none;
    }
  `};
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.black};
    opacity: 0.5;
    z-index: 0;
    animation: ${fadeIn} ${theme.transition.fast};

    @media (${theme.media.md}) {
      display: none;
    }
  `};
`;
