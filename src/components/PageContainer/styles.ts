import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0 0 10px 10px',
      paddingBottom: '20px',
    },
  }),
);

export default useStyles;
