import Heading from 'components/Heading';
import iconDark from 'assets/icon-dark-theme.svg';
import iconLight from 'assets/icon-light-theme.svg';
import iconBoard from 'assets/icon-board.svg';
import iconHideSidebar from 'assets/icon-hide-sidebar.svg';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import * as S from './style';

type NavigationProps = {
  data: {
    id: number;
    name: string;
    active: boolean;
  }[];
  onThemeToggle?: (isOn: boolean) => void;
  onNavClick?: (id: number) => void;
  onButtonClick?: () => void;
};

function Navigation({
  data,
  onThemeToggle,
  onNavClick,
  onButtonClick,
}: NavigationProps) {
  const [isOn, setIsOn] = useState(false);
  const [navList, setNavList] = useState(data);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onThemeToggle) onThemeToggle(isOn);
  };

  const handleNavClick = (id: number) => {
    setNavList(
      navList.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    if (onNavClick) onNavClick(id);
  };

  return (
    <S.Wrapper>
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
          isOn={isOn}
          onClick={handleToggle}
        />
        <img src={iconDark} alt="theme dark icon" />
      </S.ThemeWrapper>
      <S.NavButton onClick={onButtonClick}>
        <ReactSVG src={iconHideSidebar} />
        <span>Hide Sidebar</span>
      </S.NavButton>
    </S.Wrapper>
  );
}

export default Navigation;
