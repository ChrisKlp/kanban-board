import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoLight from 'assets/logo-light.svg';
import logoDark from 'assets/logo-dark.svg';
import logoMobile from 'assets/logo-mobile.svg';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import navData from 'components/Navigation/mock';
import { useCallback, useEffect, useState } from 'react';
import ContextMenu from 'components/ContextMenu';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import useMediaQuery from 'hooks/useMediaQuery';
import * as S from './style';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen: isSidebarOpen, toggleSidebar } = useSidebarState();
  const isDarkTheme = useThemeState((state) => state.isDarkTheme);
  const isTablet = useMediaQuery('(min-width: 768px)');

  const handleMenuOpen = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );

  const handleLogo = () => {
    let logo = logoMobile;
    if (isTablet) logo = logoDark;
    if (isTablet && isDarkTheme) logo = logoLight;
    return logo;
  };

  useEffect(() => {
    if (!isTablet && isSidebarOpen) toggleSidebar();
    if (isTablet && isMenuOpen) handleMenuOpen();
  }, [handleMenuOpen, isMenuOpen, isSidebarOpen, isTablet, toggleSidebar]);

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper isSidebarOpen={isSidebarOpen}>
          <img src={handleLogo()} alt="Kanban logo" />
        </S.LogoWrapper>
        <S.ContentWrapper isSidebarOpen={isSidebarOpen}>
          <S.NavDropdown onClick={handleMenuOpen}>
            <Heading>Platform Launch</Heading>
            <img
              src={isMenuOpen ? iconChevronUp : iconChevronDown}
              alt="Board list dropdown icon"
            />
          </S.NavDropdown>
          <Heading as="h2">Platform Launch</Heading>
          <div>
            <S.NewTaskButton>
              <img src={iconAddTaskMobile} alt="Add task icon" />
              <span>+ Add New Task</span>
            </S.NewTaskButton>
            <ContextMenu />
          </div>
        </S.ContentWrapper>
      </S.Wrapper>
      {isMenuOpen && (
        <>
          <S.NavigationMobileWrapper>
            <Navigation
              data={navData}
              onNavClick={() => setIsMenuOpen(false)}
            />
          </S.NavigationMobileWrapper>
          <S.Overlay onClick={() => setIsMenuOpen(false)} />
        </>
      )}
    </>
  );
}

export default Navbar;
