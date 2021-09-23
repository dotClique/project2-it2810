import useStyles from './styles';
import { Link } from '@material-ui/core';
import { ReactNode } from 'react';

type IconLinkProps = {
  title: string;
  icon: ReactNode;
};

export default function IconLink(props: IconLinkProps) {
  const classes = useStyles();

  return (
    <Link underline="none" className={classes.container}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.title}</div>
    </Link>
  );
}
