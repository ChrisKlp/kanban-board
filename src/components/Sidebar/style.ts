import styled, { css } from 'styled-components';
import { SidebarProps } from '.';

export const Wrapper = styled.nav<Pick<SidebarProps, 'isSidebarOpen'>>`
  ${({ theme, isSidebarOpen }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: none;
    width: 26rem;
    background-color: ${theme.colors.bg.primary};
    border-right: 1px solid ${theme.colors.navigation.border};
    flex-shrink: 0;
    z-index: 100;

    @media (${theme.media.md}) {
      display: ${isSidebarOpen ? 'grid' : 'none'};
      grid-template-rows: auto 1fr;
    }
  `};
`;

export const LogoWrapper = styled.div`
  padding: 3.2rem 2.6rem;
  margin-bottom: 0.6rem;
`;
