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
      secondary: `${colors.purple500}10`,
      secondaryHover: `${colors.purple500}25`,
      secondaryText: colors.purple500,
      destructive: colors.red500,
      destructiveHover: colors.red300,
      destructiveText: colors.white,
    },
    contextMenu: {
      bg: colors.white,
    },
    navigation: {
      itemHover: `${colors.purple500}10`,
      border: colors.grey200,
    },
    select: {
      content: colors.white,
      optionHover: colors.grey100,
    },
    subtask: {
      bg: colors.grey100,
      bgHover: `${colors.purple500}25`,
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
    sm: 'min-width: 576px',
    md: 'min-width: 768px',
    lg: 'min-width: 1050px',
    xl: 'min-width: 1440px',
  },
  shadow: {
    large: '0px 10px 20px rgba(54, 78, 126, 0.25)',
    medium: '0px 4px 6px rgba(54, 78, 126, 0.1)',
  },
  transition: {
    default: '0.2s ease-in-out',
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
    contextMenu: {
      bg: colors.grey900,
    },
    navigation: {
      itemHover: colors.white,
      border: colors.grey700,
    },
    select: {
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
