import useStyles from './styles';
import { Container, Grid } from '@material-ui/core';
type PageContainerProps = {
  children: JSX.Element;
  title?: string;
};

export default function PageContainer(props: PageContainerProps) {
  const style = useStyles();
  return (
    <Grid container>
      <Container className={style.main} maxWidth="md">
        {props.title ? <h3>{props.title}</h3> : false}
        {props.children}
      </Container>
    </Grid>
  );
}
