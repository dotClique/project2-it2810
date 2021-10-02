import { createTheme } from '@material-ui/core';

const lightTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#f8f6f3',
        contrastText: '#1b1f28',
      },
      secondary: {
        main: '#1f1f1e',
        contrastText: '#dedede',
      },
      info: {
        main: '#f1f6f6',
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
        main: '#0c0c0c',
        contrastText: '#d4daec',
      },
      secondary: {
        main: '#222020',
        contrastText: '#d7cdcd',
      },
      info: {
        main: '#323737',
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
        main: '#a70f0f',
        contrastText: '#022c53',
      },
      secondary: {
        main: '#316d72',
        contrastText: '#31ff0d',
      },
      info: {
        main: '#941681',
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
