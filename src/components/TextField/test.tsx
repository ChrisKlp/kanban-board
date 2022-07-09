import userEvent from '@testing-library/user-event';
import { render } from 'utils/test-utils';
import TextField, { TextFieldProps } from '.';

function renderTextField(props?: TextFieldProps) {
  const onChange = jest.fn();
  const utils = render(
    <TextField
      placeholder="Enter task name"
      onChange={onChange}
      error={props?.error}
    />
  );
  const input = utils.getByPlaceholderText('Enter task name');
  const wrapper = input.parentElement!;
  let error = '' as any;
  if (props?.error) {
    error = utils.getByText(props.error);
  }

  return { ...utils, input, wrapper, error, onChange };
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
    const { input, onChange } = renderTextField();
    const text = 'Building a slideshow';
    userEvent.type(input, text);

    expect(onChange).toBeCalledTimes(text.length);
    expect(onChange).toBeCalledWith(text);
  });

  it('should render an error', () => {
    const { wrapper, error } = renderTextField({ error: 'Can’t be empty' });

    expect(error).toBeInTheDocument();
    expect(wrapper).toHaveStyle({
      border: '1px solid #EA5555',
    });
  });
});
