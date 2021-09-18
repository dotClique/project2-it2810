import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      color: theme.palette.secondary.contrastText,
    },
    menuItem: {
      color: theme.palette.info.contrastText,
    },
  }),
);

export default useStyles;
