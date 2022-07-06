import { render, screen } from 'utils/test-utils';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render the large size by default', () => {
    const { container } = render(<Heading>This board is empty</Heading>);
    expect(container.firstChild).toHaveStyle({
      fontSize: '1.8rem',
      lineHeight: '2.3rem',
    });
  });

  it('should render primary variant by default', () => {
    const { container } = render(<Heading>This board is empty</Heading>);
    expect(container.firstChild).toHaveStyle({
      color: '#2B2C37',
    });
  });

  it('should render secondary variant and small size', () => {
    const { container } = render(
      <Heading size="small" variant="secondary">
        This board is empty
      </Heading>
    );
    expect(container.firstChild).toHaveStyle({
      fontSize: '1.2rem',
      lineHeight: '1.5rem',
      color: '#828FA3',
    });
  });

  it('should render Heading as h4', () => {
    render(<Heading as="h4">This board is empty</Heading>);
    expect(
      screen.getByRole('heading', { name: /this board is empty/i, level: 4 })
    ).toBeInTheDocument();
  });
});
