import PageContainer from '../../components/PageContainer/index';
import reactLogo from '../../assets/react.png';
import gitlabLogo from '../../assets/gitlab.jpg';
import materialUI from '../../assets/materialui.png';
import useStyles from './styles';
export default function Home() {
  const classes = useStyles();
  return (
    <PageContainer title="Intro">
      <div>
        In this project we visualize gitlab data about the repository used when developing this
        website. We use react and material UI for most of the layout, and use devexpress graphs for
        the base graph components.
      </div>
      <div className={classes.imgContainer}>
        <img src={reactLogo} alt={'react'} />
        <img src={gitlabLogo} alt={'react'} />
        <img src={materialUI} alt={'react'} />
      </div>
    </PageContainer>
  );
}
