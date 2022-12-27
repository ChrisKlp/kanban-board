import iconBoard from 'assets/icon-board.svg';
import iconDark from 'assets/icon-dark-theme.svg';
import iconHideSidebar from 'assets/icon-hide-sidebar.svg';
import iconLight from 'assets/icon-light-theme.svg';
import BoardForm from 'components/BoardForm';
import Heading from 'components/Heading';
import useModal from 'hooks/useModal';
import { ForwardedRef, forwardRef, useLayoutEffect } from 'react';
import { ReactSVG } from 'react-svg';
import useBoardState from 'stores/boardState';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import shallow from 'zustand/shallow';
import * as S from './style';

type NavigationProps = {
  className?: string;
  onLinkClick?: () => void;
};

function Navigation(
  { onLinkClick, className }: NavigationProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { isDarkTheme, toggleTheme } = useThemeState();
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const { activeBoard, boards, setActiveBoard } = useBoardState(
    (state) => ({
      boards: state.boards,
      activeBoard: state.activeBoard,
      setActiveBoard: state.setActiveBoard,
    }),
    shallow
  );
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleNavClick = (id: string) => {
    setActiveBoard(id);
    if (onLinkClick) onLinkClick();
  };

  useLayoutEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDark && !isDarkTheme) {
      toggleTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.Wrapper className={className} ref={ref} data-testid="navWrapper">
        <S.NavWrapper>
          <Heading
            as="h4"
            size="small"
            variant="secondary"
          >{`ALL BOARDS (${boards.length})`}</Heading>
          <S.NavList>
            {boards.map(({ id, name }) => (
              <S.NavItem
                key={id}
                active={id === activeBoard}
                onClick={() => handleNavClick(id)}
              >
                <ReactSVG src={iconBoard} />
                <span>{name}</span>
              </S.NavItem>
            ))}
          </S.NavList>
          <S.NavButton onClick={openModal} highlight>
            <ReactSVG src={iconBoard} />
            <span>+ Create New Board</span>
          </S.NavButton>
        </S.NavWrapper>
        <S.ThemeWrapper>
          <img src={iconLight} alt="theme light icon" />
          <S.ThemeSwitch
            aria-label="Theme Switch"
            isOn={isDarkTheme}
            onClick={toggleTheme}
          />
          <img src={iconDark} alt="theme dark icon" />
        </S.ThemeWrapper>
        <S.NavButton onClick={toggleSidebar}>
          <ReactSVG src={iconHideSidebar} />
          <span>Hide Sidebar</span>
        </S.NavButton>
      </S.Wrapper>
      {isModalOpen && (
        <BoardForm title="Add New Board" closeModal={closeModal} />
      )}
    </>
  );
}

export default forwardRef<HTMLDivElement, NavigationProps>(Navigation);
