import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radio: {
      color: theme.palette.primary.contrastText + '!important',
    },
    legend: {
      color: theme.palette.primary.contrastText + '!important',
      marginBottom: '1rem',
    },
  }),
);
