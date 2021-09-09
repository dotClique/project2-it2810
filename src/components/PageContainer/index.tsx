import useStyles from "./styles";

type PageContainerProps = {
  title: string;
  children: JSX.Element;
};

export default function PageContainer(props: PageContainerProps) {
  const classes = useStyles();
  return (
    <div className={classes.overDiv}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}
