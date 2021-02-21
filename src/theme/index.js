import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    main: {
      color: '#1D2731',
    },
    secondary: {
      color: '#53535B',
    },
  },
  primary: {
    main: {
      color: '#328CC1',
      contrastText: '#FFF',
    },
  },
  secondary: {
    main: {
      color: '#FFF',
      contrastText: '#CFC5C1',
    },
  },
  tertiary: {
    main: {
      color: '#CFC5C1',
      contrastText: '#FFF',
    },
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Open Sans', sans-serif",
  transition: '200ms ease-in-out',
};
