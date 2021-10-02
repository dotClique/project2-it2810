import { createTheme } from '@material-ui/core';

const lightTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#f8f6f3', // Temporary secondary theme
        contrastText: '#1b1f28',
      },
      secondary: {
        main: '#1f1f1e', // Temporary primary theme
        contrastText: '#dedede',
      },
      info: {
        main: '#f1f6f6', // Temporary info theme
        contrastText: '#3d393e',
      },
      background: {
        default: '#f4fffe',
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
        main: '#222020', // Temporary primary theme
        contrastText: '#d7cdcd',
      },
      info: {
        main: '#323737', // Temporary info theme
        contrastText: '#afa7b1',
      },
      background: {
        default: '#070606',
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
      background: {
        default: '#03801f',
      },
    },
  },
  { name: 'dark' },
);

export const themes = { light: lightTheme, dark: darkTheme, wayTooManyColors: funkTheme };
