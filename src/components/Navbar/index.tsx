import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import logoMobile from 'assets/logo-mobile.svg';
import BoardForm from 'components/BoardForm';
import ContextMenu from 'components/ContextMenu';
import DeleteModal from 'components/DeleteModal';
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
  const { getActiveBoard } = useBoardState();
  const { isOpen: isSidebarOpen } = useSidebarState();
  const { isModalOpen, closeModal, openModal } = useModal();
  const {
    isModalOpen: isFormModalOpen,
    closeModal: closeFormModal,
    openModal: openFormModal,
  } = useModal();
  const {
    isModalOpen: isDeleteModalOpen,
    closeModal: closeDeleteModal,
    openModal: openDeleteModal,
  } = useModal();
  const isDarkTheme = useThemeState((state) => state.isDarkTheme);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const statusOptions = getActiveBoard()?.columns.map((column) => column.name);
  const activeBoardTitle = getActiveBoard()?.name;

  const handleMenuOpen = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );

  const handleNewTaskClick = () => {
    openModal();
    if (isMenuOpen) handleMenuOpen();
  };

  const closeMenu = () => setIsMenuOpen(false);

  const setLogo = () => {
    let logo = logoMobile;
    if (isTablet) logo = logoDark;
    if (isTablet && isDarkTheme) logo = logoLight;
    return logo;
  };

  useEffect(() => {
    if (isTablet && isMenuOpen) handleMenuOpen();
  }, [handleMenuOpen, isMenuOpen, isSidebarOpen, isTablet]);

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper isSidebarOpen={isSidebarOpen}>
          <img src={setLogo()} alt="Kanban logo" />
        </S.LogoWrapper>
        <S.ContentWrapper isSidebarOpen={isSidebarOpen}>
          <S.NavDropdown onClick={handleMenuOpen}>
            <Heading size="xlarge">{activeBoardTitle}</Heading>
            <img
              src={isMenuOpen ? iconChevronUp : iconChevronDown}
              alt="Board list dropdown icon"
            />
          </S.NavDropdown>
          <Heading as="h2" size="xlarge">
            {activeBoardTitle}
          </Heading>
          <div>
            <S.NewTaskButton
              onClick={handleNewTaskClick}
              disabled={!getActiveBoard()?.columns.length}
            >
              <img src={iconAddTaskMobile} alt="Add task icon" />
              <span>+ Add New Task</span>
            </S.NewTaskButton>
            <ContextMenu
              variant="board"
              onDeleteClick={openDeleteModal}
              onEditClick={openFormModal}
            />
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
      {isFormModalOpen && (
        <BoardForm
          title="Edit Board"
          board={getActiveBoard()}
          closeModal={closeFormModal}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal title="Delete this board?" closeModal={closeDeleteModal} />
      )}
    </>
  );
}

export default Navbar;
