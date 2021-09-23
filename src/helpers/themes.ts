import { createTheme } from '@material-ui/core';

export const backgroundTheme = createTheme({
  palette: {
    primary: {
      main: '#f1f1e9', // Temporary secondary theme
      contrastText: '#1b1f28',
    },
    secondary: {
      main: '#342f32', // Temporary primary theme
      contrastText: '#dedede',
    },
    info: {
      main: '#f1f6f6', // Temporary info theme
      contrastText: '#3d393e',
    },
  },
});
