import Navigation from 'components/Navigation';
import data from 'components/Navigation/mock';
import logoLight from 'assets/logo-light.svg';
import logoDark from 'assets/logo-dark.svg';
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
      <Navigation data={data} />
    </S.Wrapper>
  );
}

export default Sidebar;
