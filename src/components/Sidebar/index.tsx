import Navigation from 'components/Navigation';
import data from 'components/Navigation/mock';
import logoLight from 'assets/logo-light.svg';
import logoDark from 'assets/logo-dark.svg';
import * as S from './style';

export type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <S.Wrapper isSidebarOpen={isSidebarOpen}>
      <S.LogoWrapper>
        <img src={logoDark} className="desktopLogo" alt="Kanban logo" />
      </S.LogoWrapper>
      <Navigation data={data} onHideSidebarClick={toggleSidebar} />
    </S.Wrapper>
  );
}

export default Sidebar;
