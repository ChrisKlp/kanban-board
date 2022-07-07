import { render, screen } from 'utils/test-utils';
import Subtask from '.';

describe('<Subtask/>', () => {
  it('should render unchecked state by default', () => {
    const { container } = render(<Subtask>Research the market</Subtask>);
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#F4F7FD',
    });
    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: '#FFFFFF',
    });
  });

  it('should render checked state', () => {
    const { container } = render(
      <Subtask checked>Research the market</Subtask>
    );
    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: '#635FC7',
    });
    expect(screen.getByText(/Research the market/i)).toHaveStyle({
      color: '#00011250',
      textDecoration: 'line-through',
    });
  });
});
