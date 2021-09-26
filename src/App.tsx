import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { backgroundTheme } from './helpers/themes';
import Home from './pages/Home/index';
import BarChartPage from './pages/BarChartPage';
import FeatsVsFixesPage from './pages/FeatsVsFixesPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={backgroundTheme}>
        <NavBar title="CoolWebsiteName" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path={'/commits'}>
              <FeatsVsFixesPage />
            </Route>
            <Route exact path={'/bar'}>
              <BarChartPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
