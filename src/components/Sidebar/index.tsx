import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import Navigation from 'components/Navigation';
import useSidebarState from 'stores/sidebarState';
import useThemeState from 'stores/themeState';
import * as S from './style';

function Sidebar() {
  const isOpen = useSidebarState((state) => state.isOpen);
  const isDarkTheme = useThemeState((state) => state.isDarkTheme);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.LogoWrapper>
        <img
          src={isDarkTheme ? logoLight : logoDark}
          className="desktopLogo"
          alt="Kanban logo"
        />
      </S.LogoWrapper>
      <Navigation />
    </S.Wrapper>
  );
}

export default Sidebar;
