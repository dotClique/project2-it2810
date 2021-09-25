import { Link } from '@material-ui/core';
import { ReactNode } from 'react';
import useStyles from './styles';

type IconLinkProps = {
  title: string;
  icon: ReactNode;
  url?: string;
  onClick?: () => void;
};

export default function IconLink(props: IconLinkProps) {
  const classes = useStyles();

  return (
    <Link href={props.url} underline="none" className={classes.container} onClick={props.onClick}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.text}>{props.title}</div>
    </Link>
  );
}
