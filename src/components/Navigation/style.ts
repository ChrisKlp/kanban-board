import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  padding: 1.6rem 0;
`;

export const NavWrapper = styled.div`
  margin-bottom: 1.6rem;
  & > h4 {
    margin-left: 2.4rem;
  }
`;

export const NavList = styled.ul`
  margin-top: 1.9rem;
`;

export const NavItem = styled.li<{ active?: boolean }>`
  ${({ theme, active }) => css`
    padding: 1.4rem 0 1.5rem 2.4rem;
    width: calc(100% - 2.4rem);
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-radius: 0 3em 3em 0;
    background-color: ${active ? theme.colors.purple500 : 'unset'};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    & span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.9rem;
      color: ${active ? theme.colors.white : theme.colors.grey600};
      transition: color ${theme.transition.fast};
    }
    & svg path {
      fill: ${active ? theme.colors.white : theme.colors.grey600};
      transition: fill ${theme.transition.fast};
    }

    ${!active &&
    css`
      &:hover {
        background-color: ${theme.colors.navigation.itemHover};
        & span {
          color: ${theme.colors.purple500};
        }
        & svg path {
          fill: ${theme.colors.purple500};
        }
      }
    `}
  `};
`;

export const NavButton = styled(NavItem).attrs({
  as: 'button',
})<{ highlight?: boolean }>`
  ${({ theme, highlight }) => css`
    display: none;

    @media (${theme.media.md}) {
      display: flex;
    }

    ${highlight &&
    css`
      display: flex;
      & span {
        color: ${theme.colors.purple500};
      }

      & svg path {
        fill: ${theme.colors.purple500};
      }
    `}
  `};
`;

export const ThemeWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 1.6rem;
    margin-bottom: 0.8rem;
    padding: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    background-color: ${theme.colors.bg.body};
    border-radius: 0.6rem;
  `};
`;

export const ThemeSwitch = styled.button<{ isOn: boolean }>`
  ${({ theme, isOn }) => css`
    position: relative;
    width: 4rem;
    height: 2rem;
    background-color: ${theme.colors.purple500};
    border-radius: 3em;
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.purple300};
    }

    &::after {
      position: absolute;
      top: 0.3rem;
      left: ${isOn ? 'calc(100% - 1.7rem)' : '0.3rem'};
      bottom: 0.3rem;
      background-color: ${theme.colors.white};
      border-radius: 50%;
      width: 1.4rem;
      height: 1.4rem;
      transition: left ${theme.transition.fast};
      content: '';
    }
  `};
`;
