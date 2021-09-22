import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      color: theme.palette.secondary.contrastText,
      width: '1.5rem',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&:active': {
        backgroundColor: theme.palette.secondary.dark,
      },
      borderRadius: '10px',
      padding: '2px 1rem 2px',
      gap: '0.25rem',
      cursor: 'pointer',
    },
    text: {
      color: theme.palette.secondary.contrastText,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
    },
  }),
);

export default useStyles;
