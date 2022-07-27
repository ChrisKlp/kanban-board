import iconBoard from 'assets/icon-board.svg';
import iconDark from 'assets/icon-dark-theme.svg';
import iconHideSidebar from 'assets/icon-hide-sidebar.svg';
import iconLight from 'assets/icon-light-theme.svg';
import Heading from 'components/Heading';
import { ForwardedRef, forwardRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import * as S from './style';

type NavigationProps = {
  data: {
    id: number;
    name: string;
    active: boolean;
  }[];
  className?: string;
  onNavClick?: (id: number) => void;
  onButtonClick?: () => void;
};

function Navigation(
  { data, onNavClick, onButtonClick, className }: NavigationProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [navList, setNavList] = useState(data);
  const { isDarkTheme, toggleTheme } = useThemeState();
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);

  const handleNavClick = (id: number) => {
    setNavList(
      navList.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    if (onNavClick) onNavClick(id);
  };

  return (
    <S.Wrapper className={className} ref={ref} data-testid="navWrapper">
      <S.NavWrapper>
        <Heading
          as="h4"
          size="small"
          variant="secondary"
        >{`ALL BOARDS (${data.length})`}</Heading>
        <S.NavList>
          {navList.map(({ id, name, active }) => (
            <S.NavItem
              key={id}
              active={active}
              onClick={() => handleNavClick(id)}
            >
              <ReactSVG src={iconBoard} />
              <span>{name}</span>
            </S.NavItem>
          ))}
        </S.NavList>
        <S.NavButton onClick={onButtonClick} highlight>
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
  );
}

export default forwardRef<HTMLDivElement, NavigationProps>(Navigation);
