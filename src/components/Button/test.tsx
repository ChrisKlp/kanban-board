import { render } from 'utils/test-utils';
import Button from '.';

describe('<Button/>', () => {
  it('should render the small size by default', () => {
    const { container } = render(<Button>Create Task</Button>);
    expect(container.firstChild).toHaveStyle({
      padding: '0.9rem 1.8rem',
      fontSize: '1.3rem',
    });
  });

  it('should render primary variant by default', () => {
    const { container } = render(<Button>Create Task</Button>);
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#635FC7',
      color: '#FFFFFF',
    });
  });

  it('should render the large size', () => {
    const { container } = render(<Button size="large">Create Task</Button>);
    expect(container.firstChild).toHaveStyle({
      padding: '1.5rem 1.8rem',
      fontSize: '1.5rem',
    });
  });

  it('should render the secondary variant', () => {
    const { container } = render(
      <Button variant="secondary">Create Task</Button>
    );
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#635FC710',
      color: '#635FC7',
    });
  });

  it('should render the destructive variant', () => {
    const { container } = render(
      <Button variant="destructive">Create Task</Button>
    );
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#EA5555',
      color: '#FFFFFF',
    });
  });
});
