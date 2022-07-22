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

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    padding-right: 1.6rem;
    display: flex;
    align-items: center;
    height: 100%;

    & .desktopLogo {
      display: none;
    }

    @media (${theme.media.md}) {
      padding-right: 2.4rem;
      border-right: 1px solid ${theme.colors.navigation.border};

      & .desktopLogo {
        display: block;
      }

      & .mobileLogo {
        display: none;
      }
    }

    @media (${theme.media.lg}) {
      padding-right: 3.2rem;
    }
  `};
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
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
      padding-left: 2.4rem;

      & > h2 {
        display: block;
      }
    }

    @media (${theme.media.lg}) {
      padding-left: 3.2rem;
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

export const ContextMenuButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    margin-left: 0.6rem;
    margin-right: -1rem;
    padding: 0 1rem;
    cursor: pointer;

    @media (${theme.media.md}) {
      margin-left: 1.4rem;
    }

    @media (${theme.media.lg}) {
      margin-left: 1.4rem;
      margin-right: -0.2rem;
    }
  `};
`;

export const ContextMenu = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 3.6rem;
    padding: 1.6rem;
    display: grid;
    gap: 1.6rem;
    background-color: ${theme.colors.bg.primary};
    border-radius: 0.8rem;
    animation: ${fadeIn} ${theme.transition.fast};
    z-index: 10;
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
