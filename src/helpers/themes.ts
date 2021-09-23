import { createTheme } from '@material-ui/core';

export const backgroundTheme = createTheme({
  palette: {
    primary: {
      main: '#dedede', // Temporary secondary theme
      contrastText: '#405070',
    },
    secondary: {
      main: '#342f32', // Temporary primary theme
      contrastText: '#dedede',
    },
    info: {
      main: '#ff0909', // Temporary info theme
      contrastText: '#9e01ba',
    },
  },
});
