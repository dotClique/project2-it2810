import useStyles from './styles';
import { Link } from '@material-ui/core';
import { ReactNode } from 'react';

type IconLinkProps = {
  title: string;
  icon: ReactNode;
  url: string;
};

export default function IconLink(props: IconLinkProps) {
  const classes = useStyles();

  return (
    <Link href={props.url} underline="none" className={classes.container}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.title}</div>
    </Link>
  );
}
