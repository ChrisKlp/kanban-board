import userEvent from '@testing-library/user-event';
import { render } from 'utils/test-utils';
import Navigation from '.';
import navData from './mock';

function renderNavigation() {
  const onButtonClick = jest.fn();
  const onNavClick = jest.fn();

  const utils = render(
    <Navigation
      data={navData}
      onButtonClick={onButtonClick}
      onNavClick={onNavClick}
    />
  );

  const wrapper = utils.getByTestId('navWrapper');
  const heading = utils.getByText(/All Boards/i);
  const navList = utils.getByRole('list');
  const button = utils.getByText('+ Create New Board');
  const sideBarButton = wrapper.lastElementChild!;
  const themeSwitch = utils.getByLabelText('Theme Switch');

  return {
    ...utils,
    wrapper,
    heading,
    navList,
    button,
    sideBarButton,
    themeSwitch,
    onNavClick,
    onButtonClick,
  };
}

describe('<Navigation />', () => {
  it('should render list with 3 boards', () => {
    const { heading, navList, button, themeSwitch } = renderNavigation();
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(navList).toBeInTheDocument();
    expect(themeSwitch).toBeInTheDocument();
    expect(navList.childElementCount).toBe(3);
  });

  it('should render list with first item active', () => {
    const { navList, getByText } = renderNavigation();
    expect(navList.firstChild).toHaveStyle({
      backgroundColor: '#635FC7',
    });
    expect(getByText('Platform Launch')).toHaveStyle({
      color: '#FFFFFF',
    });
    expect(getByText('Marketing Plan')).toHaveStyle({
      color: '#828FA3',
    });
  });

  it('should call func on button press', () => {
    const { button, onButtonClick } = renderNavigation();

    userEvent.click(button);
    expect(onButtonClick).toBeCalled();
    expect(onButtonClick).toBeCalledTimes(1);
  });

  it('should call func on nav item press', () => {
    const { navList, onNavClick } = renderNavigation();

    userEvent.click(navList.lastElementChild!);
    expect(onNavClick).toBeCalled();
    expect(onNavClick).toBeCalledTimes(1);
  });
});
