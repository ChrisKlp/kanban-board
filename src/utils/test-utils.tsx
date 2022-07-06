import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);

export * from '@testing-library/react';
export { customRender as render };
