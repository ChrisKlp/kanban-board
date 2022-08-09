import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import logoMobile from 'assets/logo-mobile.svg';
import ContextMenu from 'components/ContextMenu';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import TaskForm from 'components/TaskForm';
import useMediaQuery from 'hooks/useMediaQuery';
import useModal from 'hooks/useModal';
import { useCallback, useEffect, useState } from 'react';
import useBoardState from 'stores/boardState';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import * as S from './style';

function Navbar() {
  const { getActiveBoard, deleteBoard } = useBoardState();
  const { isOpen: isSidebarOpen, toggleSidebar } = useSidebarState();
  const { isModalOpen, closeModal, openModal } = useModal();
  const isDarkTheme = useThemeState((state) => state.isDarkTheme);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const statusOptions = getActiveBoard()?.columns.map((column) => column.name);
  const activeBoardTitle = getActiveBoard()?.name;

  const handleMenuOpen = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );

  const closeMenu = () => setIsMenuOpen(false);

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
            <S.NewTaskButton onClick={openModal}>
              <img src={iconAddTaskMobile} alt="Add task icon" />
              <span>+ Add New Task</span>
            </S.NewTaskButton>
            <ContextMenu variant="board" onDeleteClick={deleteBoard} />
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
      {isModalOpen && (
        <TaskForm
          title="Add New Task"
          closeModal={closeModal}
          statusOptions={statusOptions}
        />
      )}
    </>
  );
}

export default Navbar;
