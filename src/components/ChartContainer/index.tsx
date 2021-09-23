import Paper from '@material-ui/core/Paper';
import { ReactNode } from 'react';
import useStyles from './styles';

type ChartContainerProps = {
  children: ReactNode;
};

export default function ChartContainer(props: ChartContainerProps) {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
}
