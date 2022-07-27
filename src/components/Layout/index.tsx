import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import logoMobile from 'assets/logo-mobile.svg';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import useSidebarState from 'stores/sidebarState';
import * as S from './style';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isOpen, toggleSidebar } = useSidebarState();

  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content isOpen={isOpen}>
        <Navbar />
        <main>{children}</main>
      </S.Content>
      <S.SidebarToggle onClick={toggleSidebar} />
    </S.Wrapper>
  );
}

export default Layout;
