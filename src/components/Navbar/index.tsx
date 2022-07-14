import logoDark from 'assets/logo-dark.svg';
import logoLight from 'assets/logo-light.svg';
import logoMobile from 'assets/logo-mobile.svg';
import iconAddTaskMobile from 'assets/icon-add-task-mobile.svg';
import iconVerticalEllipsis from 'assets/icon-vertical-ellipsis.svg';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import iconChevronUp from 'assets/icon-chevron-up.svg';
import Heading from 'components/Heading';
import * as S from './style';

function Navbar() {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <img src={logoMobile} className="mobileLogo" alt="Kanban logo" />
        <img src={logoDark} className="desktopLogo" alt="Kanban logo" />
      </S.LogoWrapper>
      <S.ContentWrapper>
        <S.Dropdown>
          <Heading>Platform Launch</Heading>
          <img src={iconChevronDown} alt="Board list dropdown icon" />
        </S.Dropdown>
        <S.NewTaskButton>
          <img src={iconAddTaskMobile} alt="Add task icon" />
          <span>+ Add New Task</span>
        </S.NewTaskButton>
        <S.ContextMenuButton>
          <img src={iconVerticalEllipsis} alt="Context menu icon" />
        </S.ContextMenuButton>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default Navbar;
