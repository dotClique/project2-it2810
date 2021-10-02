import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    imgContainer: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr 1fr',
      width: '100%',
      '& *': {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      alignItems: 'center',
      marginTop: '2rem',
    },
    materialUILogo: {
      maxWidth: '50%',
    },
  }),
);

export default useStyles;
