import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropdown: {
      width: '10em',
      '& label': {
        color: theme.palette.primary.contrastText + '!important',
      },
    },
    select: {
      color: theme.palette.info.contrastText + '!important',
      backgroundColor: theme.palette.info.main,
      paddingLeft: '1rem',
    },
  }),
);

export default useStyles;
