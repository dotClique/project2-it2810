import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      '& text': {
        fill: theme.palette.info.contrastText,
      },
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  }),
);

export default useStyles;
