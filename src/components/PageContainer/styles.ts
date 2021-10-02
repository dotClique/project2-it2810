import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,

      paddingBottom: '20px',
      [theme.breakpoints.up('md')]: {
        borderRadius: '0 0 10px 10px',
      },
    },
    background: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      minHeight: '100vh',
    },
  }),
);

export default useStyles;
