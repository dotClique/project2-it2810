import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      color: theme.palette.secondary.contrastText,
    },
    menuItem: {
      color: theme.palette.secondary.main,
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    linkContainer: {
      display: 'flex',
    },
  }),
);

export default useStyles;
