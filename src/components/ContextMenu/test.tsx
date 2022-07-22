import userEvent from '@testing-library/user-event';
import { render } from 'utils/test-utils';
import Context from '.';

function renderContextMenu() {
  const utils = render(<Context />);
  const button = utils.getByRole('button');
  const wrapper = button.parentElement!;

  return {
    ...utils,
    button,
    wrapper,
  };
}

describe('<ContextMenu />', () => {
  it('should render closed menu by default', () => {
    const { wrapper } = renderContextMenu();
    expect(wrapper.childElementCount).toBe(1);
  });

  it('should handle open/close menu', () => {
    const { button, wrapper, getByText, getByRole } = renderContextMenu();

    userEvent.click(button);

    const editOption = getByText(/Edit Board/i);
    const optionsWrapper = getByRole('list');

    expect(optionsWrapper).toBeInTheDocument();
    expect(editOption).toBeInTheDocument();
    expect(optionsWrapper.childElementCount).toBe(2);

    userEvent.click(button);

    expect(wrapper.childElementCount).toBe(1);
  });

  it('should close menu by clicking outside', () => {
    const { button, wrapper, getByRole } = renderContextMenu();

    userEvent.click(button);
    const optionsWrapper = getByRole('list');
    expect(optionsWrapper).toBeInTheDocument();

    userEvent.click(document.body);
    expect(wrapper.childElementCount).toBe(1);
    expect(optionsWrapper).not.toBeInTheDocument();
  });
});
