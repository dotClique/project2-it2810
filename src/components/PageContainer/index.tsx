import useStyles from './styles';
import { Container, Grid } from '@material-ui/core';
import { ReactNode } from 'react';
type PageContainerProps = {
  children: ReactNode;
  title?: string;
};

export default function PageContainer(props: PageContainerProps) {
  const style = useStyles();
  return (
    <Grid container className={style.background}>
      <Container className={style.main} maxWidth="md">
        {props.title ? <h3>{props.title}</h3> : false}
        {props.children}
      </Container>
    </Grid>
  );
}
