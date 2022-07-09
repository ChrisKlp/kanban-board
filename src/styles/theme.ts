const colors = {
  white: '#FFFFFF',
  grey100: '#F4F7FD',
  grey200: '#E4EBFA',
  grey600: '#828FA3',
  grey700: '#3E3F4E',
  grey800: '#2B2C37',
  grey900: '#20212C',
  black: '#000112',
  purple300: '#A8A4FF',
  purple500: '#635FC7',
  purple500_10: '#635FC710',
  purple500_25: '#635FC725',
  red500: '#EA5555',
  red300: '#FF9898',
};

const themeLight = {
  colors: {
    ...colors,
    bg: {
      primary: colors.white,
      body: colors.grey100,
    },
    button: {
      primary: colors.purple500,
      primaryHover: colors.purple300,
      primaryText: colors.white,
      secondary: colors.purple500_10,
      secondaryHover: colors.purple500_25,
      secondaryText: colors.purple500,
      destructive: colors.red500,
      destructiveHover: colors.red300,
      destructiveText: colors.white,
    },
    dropdown: {
      content: colors.white,
      optionHover: colors.grey100,
    },
    subtask: {
      bg: colors.grey100,
      bgHover: colors.purple500_25,
      checkboxChecked: colors.purple500,
    },
    text: {
      primary: colors.black,
      secondary: colors.grey600,
    },
  },
  font: {
    family: 'Plus Jakarta Sans, sans-serif',
  },
  media: {
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1050px)',
    xl: '@media (min-width: 1440px)',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
};

export const themeDark = {
  ...themeLight,
  colors: {
    ...themeLight.colors,
    bg: {
      primary: colors.grey800,
      body: colors.grey900,
    },
    button: {
      ...themeLight.colors.button,
      secondary: colors.white,
      secondaryHover: colors.grey100,
    },
    dropdown: {
      content: colors.grey900,
      optionHover: colors.grey800,
    },
    subtask: {
      ...themeLight.colors.subtask,
      bg: colors.grey900,
    },
    text: {
      ...themeLight.colors.text,
      primary: colors.white,
    },
  },
};

export default themeLight;
export type ThemeType = typeof themeLight;
