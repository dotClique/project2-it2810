import { ThemeProvider } from '@material-ui/styles';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CommonLogic from './components/CommonLogic/index';
import NavBar from './components/NavBar';
import { OpenSettingsContext } from './helpers/context';
import { backgroundTheme } from './helpers/themes';
import BarChartPage from './pages/BarChartPage';
import Home from './pages/Home/index';
import SettingsPage from './pages/SettingsPage/index';
import FeatsVsFixesPage from './pages/FeatsVsFixesPage';
import TimePerIssueLabelPage from './pages/TimePerIssueLabelPage/index';

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div className="App">
      <OpenSettingsContext.Provider value={[openSettings, setOpenSettings]}>
        <ThemeProvider theme={backgroundTheme}>
          <NavBar title="Gitlab data visualization" />
          <SettingsPage open={openSettings} onClose={() => setOpenSettings(false)} />
          <Router>
            <CommonLogic />
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
              <Route exact path={'/timeperissuelabel'}>
                <TimePerIssueLabelPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </OpenSettingsContext.Provider>
    </div>
  );
}

export default App;
