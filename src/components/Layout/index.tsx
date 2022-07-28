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
        <S.MainWrapper>{children}</S.MainWrapper>
      </S.Content>
      <S.SidebarToggle onClick={toggleSidebar} />
    </S.Wrapper>
  );
}

export default Layout;
