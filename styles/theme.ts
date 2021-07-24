export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  color: {
    blue: {
      default: '#1a73e8',
      50: '#e3f2ff',
      100: '#bbdeff',
      200: '#8dcaff',
      300: '#5cb5ff',
      400: '#34a4ff',
      500: '#0095ff',
      600: '#1386fc',
      700: '#1a73e8',
      800: '#1d61d5',
      900: '#1f41b6',
    },
  },
  mediaQuery: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
