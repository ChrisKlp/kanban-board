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

const theme = {
  colors: {
    bg: colors.grey100,
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
};

export default theme;
export type ThemeType = typeof theme;
