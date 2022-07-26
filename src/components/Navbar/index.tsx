import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import logoLight from 'assets/logo-light.svg';
import logoDark from 'assets/logo-dark.svg';
import logoMobile from 'assets/logo-mobile.svg';
import Heading from 'components/Heading';
import Navigation from 'components/Navigation';
import navData from 'components/Navigation/mock';
import { useState } from 'react';
import ContextMenu from 'components/ContextMenu';
import * as S from './style';

type NavbarProps = {
  isSidebarOpen: boolean;
};

// eslint-disable-next-line no-empty-pattern
function Navbar({ isSidebarOpen }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper hidden={isSidebarOpen}>
          <img
            src={logoMobile}
            className="mobileLogo"
            alt="Kanban logo mobile"
          />
          <img src={logoDark} className="desktopLogo" alt="Kanban logo" />
        </S.LogoWrapper>
        <S.ContentWrapper>
          <S.NavDropdown onClick={handleMenuOpen}>
            <Heading>Platform Launch</Heading>
            <img
              src={isMenuOpen ? iconChevronUp : iconChevronDown}
              alt="Board list dropdown icon"
            />
          </S.NavDropdown>
          <Heading as="h2">Platform Launch</Heading>
          <div>
            <S.NewTaskButton>
              <img src={iconAddTaskMobile} alt="Add task icon" />
              <span>+ Add New Task</span>
            </S.NewTaskButton>
            <ContextMenu />
          </div>
        </S.ContentWrapper>
      </S.Wrapper>
      {isMenuOpen && (
        <>
          <S.NavigationMobileWrapper>
            <Navigation
              data={navData}
              onNavClick={() => setIsMenuOpen(false)}
            />
          </S.NavigationMobileWrapper>
          <S.Overlay onClick={() => setIsMenuOpen(false)} />
        </>
      )}
    </>
  );
}

export default Navbar;
