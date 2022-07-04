import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const Button = styled.button`
  color: red;
  font-size: 10px;
  line-height: 10px;
  border-radius: 50%;
`;

describe('style tests', () => {
  test('it renders correct styles for X', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'red');
  });
});

describe('other tests', () => {
  test('it renders correct markup for case X', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
