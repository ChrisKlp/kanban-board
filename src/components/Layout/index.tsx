import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useState } from 'react';
import * as S from './style';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <S.Wrapper>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <S.Content isSidebarOpen={isSidebarOpen}>
        <Navbar isSidebarOpen={isSidebarOpen} />
        <main>{children}</main>
      </S.Content>
      <S.SidebarToggle onClick={toggleSidebar} />
    </S.Wrapper>
  );
}

export default Layout;
