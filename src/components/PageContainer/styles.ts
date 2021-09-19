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
  }),
);

export default useStyles;
