import { render } from 'utils/test-utils';
import Text from '.';

describe('<Text/>', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Text>This board is empty</Text>);
    expect(container.firstChild).toHaveStyle({
      fontWeight: 700,
      fontSize: '1.2rem',
    });
  });

  it('should render dark variant by default', () => {
    const { container } = render(<Text>This board is empty</Text>);
    expect(container.firstChild).toHaveStyle({
      color: '#2B2C37',
    });
  });

  it('should render the large size and grey variant', () => {
    const { container } = render(
      <Text size="large" variant="grey">
        This board is empty
      </Text>
    );
    expect(container.firstChild).toHaveStyle({
      color: '#828FA3',
      fontSize: '1.3rem',
      lineHeight: '2.3rem',
    });
  });
});
