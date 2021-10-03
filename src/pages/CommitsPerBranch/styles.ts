import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switch: {
      display: 'flex',
      color: theme.palette.primary.contrastText + '!important',
    },
    switchcontainer: {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  }),
);

export default useStyles;
