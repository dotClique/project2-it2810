import { createTheme } from '@material-ui/core';

const lightTheme = createTheme(
  {
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
  },
  { name: 'light' },
);

const darkTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#0c0c0c', // Temporary secondary theme
        contrastText: '#d4daec',
      },
      secondary: {
        main: '#ffffff', // Temporary primary theme
        contrastText: '#530909',
      },
      info: {
        main: '#0e9999', // Temporary info theme
        contrastText: '#6c1c7a',
      },
    },
  },
  { name: 'dark' },
);

const funkTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#a70f0f', // Temporary secondary theme
        contrastText: '#022c53',
      },
      secondary: {
        main: '#316d72', // Temporary primary theme
        contrastText: '#31ff0d',
      },
      info: {
        main: '#941681', // Temporary info theme
        contrastText: '#e9cb14',
      },
    },
  },
  { name: 'dark' },
);

export const themes = { light: lightTheme, dark: darkTheme, wayTooManyColors: funkTheme };
