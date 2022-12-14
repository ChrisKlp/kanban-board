import userEvent from '@testing-library/user-event';
import { render } from 'utils/test-utils';
import Subtask from '.';

let text: HTMLElement;
let wrapper: ChildNode;
let checkbox: ChildNode;
let onCheckboxChange: jest.Mock;

describe('<Subtask/>', () => {
  onCheckboxChange = jest.fn();
  beforeEach(() => {
    const utils = render(
      <Subtask onCheckboxChange={onCheckboxChange}>Research the market</Subtask>
    );
    text = utils.getByText(/Research the market/i);
    wrapper = utils.container.firstChild!;
    checkbox = wrapper.firstChild!;
  });

  it('should render unchecked state by default', () => {
    expect(wrapper).toHaveStyle({
      backgroundColor: '#F4F7FD',
    });
    expect(checkbox).toHaveStyle({
      backgroundColor: '#FFFFFF',
    });
  });

  it('should render checked state', () => {
    userEvent.click(text);

    expect(checkbox).toHaveStyle({
      backgroundColor: '#635FC7',
    });
    expect(text).toHaveStyle({
      color: '#000112',
      opacity: 0.5,
      textDecoration: 'line-through',
    });
  });

  it('should call onChecked function', () => {
    userEvent.click(text);
    expect(onCheckboxChange).toBeCalled();
  });
});
