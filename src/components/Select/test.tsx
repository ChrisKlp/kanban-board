import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';
import Select from '.';
import mock from './mock';

let title: HTMLElement;
let titleText: HTMLElement;
let wrapper: HTMLElement;
let onSelect: jest.Mock;

describe('<Dropdown>', () => {
  beforeEach(() => {
    onSelect = jest.fn();
    const utils = render(
      <Select title={mock.title} options={mock.options} onSelect={onSelect} />
    );
    titleText = utils.getByText(/select status/i);
    title = titleText.parentElement!;
    wrapper = title.parentElement!;
  });

  it('should render title', () => {
    expect(screen.getByText(/select status/i)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    expect(wrapper.childElementCount).toBe(1);

    userEvent.click(title);

    const content = screen.getByRole('list');

    expect(content).toBeInTheDocument();
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
    expect(wrapper.childElementCount).toBe(2);

    userEvent.click(title);

    expect(wrapper.childElementCount).toBe(1);
  });

  it('should change title by selecting an option', () => {
    userEvent.click(titleText.parentElement!);

    const option = screen.getByText(/doing/i);
    userEvent.click(option);

    expect(titleText).toHaveTextContent(/doing/i);
  });

  it('should close dropdown by clicking outside', () => {
    userEvent.click(title);
    expect(wrapper.childElementCount).toBe(2);
    const todo = screen.getByText(/todo/i);
    expect(todo).toBeInTheDocument();

    userEvent.click(document.body);
    expect(wrapper.childElementCount).toBe(1);
    expect(todo).not.toBeInTheDocument();
  });

  it('should call onSelect function', () => {
    userEvent.click(title);
    userEvent.click(screen.getByText(/doing/i));
    expect(onSelect).toHaveBeenCalled();
  });
});
