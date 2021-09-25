import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginLeft: 20,
    },
    contentDiv: {
      padding: '0px 20px 20px 20px',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dialog: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
);
