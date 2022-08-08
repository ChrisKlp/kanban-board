import userEvent from '@testing-library/user-event';
import { render } from 'utils/test-utils';
import TextField, { TextFieldProps } from '.';

function renderTextField(props?: TextFieldProps) {
  const onInputChange = jest.fn();
  const utils = render(
    <TextField
      placeholder="Enter task name"
      onInputChange={onInputChange}
      error={props?.error}
    />
  );
  const input = utils.getByPlaceholderText('Enter task name');
  const wrapper = input.parentElement!;
  let error = '' as any;
  if (props?.error) {
    error = utils.getByText('Can’t be empty');
  }

  return { ...utils, input, wrapper, error, onInputChange };
}

describe('<TextField/>', () => {
  it('should render placeholder by default', () => {
    const { input, wrapper } = renderTextField();

    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle({
      fontWeight: 500,
      fontSize: '1.3rem',
    });
    expect(wrapper).toHaveStyle({
      border: '1px solid #828FA325',
    });
  });

  it('should change its value when typing', () => {
    const { input, onInputChange } = renderTextField();
    const text = 'Building a slideshow';
    userEvent.type(input, text);

    expect(onInputChange).toBeCalledTimes(text.length);
    expect(onInputChange).toBeCalledWith(text);
  });

  it('should render an error', () => {
    const { wrapper, error } = renderTextField({ error: true });

    expect(error).toBeInTheDocument();
    expect(wrapper).toHaveStyle({
      border: '1px solid #EA5555',
    });
  });
});
