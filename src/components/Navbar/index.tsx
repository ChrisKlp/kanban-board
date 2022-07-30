import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import logoMobile from 'assets/logo-mobile.svg';
import ContextMenu from 'components/ContextMenu';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import useMediaQuery from 'hooks/useMediaQuery';
import { useCallback, useEffect, useState } from 'react';
import useBoardState from 'stores/boardState';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import * as S from './style';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen: isSidebarOpen, toggleSidebar } = useSidebarState();
  const isDarkTheme = useThemeState((state) => state.isDarkTheme);
  const boards = useBoardState((state) => state.boards);
  const activeBoard = useBoardState((state) => state.activeBoard);
  const isTablet = useMediaQuery('(min-width: 768px)');

  const handleMenuOpen = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );

  const closeMenu = () => setIsMenuOpen(false);

  const activeBoardTitle = boards.find(
    (board) => board.id === activeBoard
  )?.name;

  const setLogo = () => {
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
          <img src={setLogo()} alt="Kanban logo" />
        </S.LogoWrapper>
        <S.ContentWrapper isSidebarOpen={isSidebarOpen}>
          <S.NavDropdown onClick={handleMenuOpen}>
            <Heading>{activeBoardTitle}</Heading>
            <img
              src={isMenuOpen ? iconChevronUp : iconChevronDown}
              alt="Board list dropdown icon"
            />
          </S.NavDropdown>
          <Heading as="h2">{activeBoardTitle}</Heading>
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
            <Navigation onLinkClick={closeMenu} />
          </S.NavigationMobileWrapper>
          <S.Overlay onClick={closeMenu} />
        </>
      )}
    </>
  );
}

export default Navbar;
