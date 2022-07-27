import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoLight from 'assets/logo-light.svg';
import logoDark from 'assets/logo-dark.svg';
import logoMobile from 'assets/logo-mobile.svg';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import navData from 'components/Navigation/mock';
import { useEffect, useState } from 'react';
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

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (!isTablet && isSidebarOpen) {
      console.log('jazda');
      toggleSidebar();
    }
  }, [isSidebarOpen, isTablet, toggleSidebar]);

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper hidden={isSidebarOpen}>
          <img
            src={logoMobile}
            className="mobileLogo"
            alt="Kanban logo mobile"
          />
          <img
            src={isDarkTheme ? logoLight : logoDark}
            className="desktopLogo"
            alt="Kanban logo"
          />
        </S.LogoWrapper>
        <S.ContentWrapper>
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
