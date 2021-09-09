import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    overDiv: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default useStyles;
