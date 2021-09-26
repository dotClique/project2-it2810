import { ThemeProvider } from '@material-ui/styles';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { OpenSettingsContext } from './helpers/context';
import { backgroundTheme } from './helpers/themes';
import BarChartPage from './pages/BarChartPage';
import Home from './pages/Home/index';
import PieChartPage from './pages/PieChartPage';
import SettingsPage from './pages/SettingsPage/index';

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div className="App">
      <OpenSettingsContext.Provider value={[openSettings, setOpenSettings]}>
        <ThemeProvider theme={backgroundTheme}>
          <NavBar title="CoolWebsiteName" />
          <SettingsPage open={openSettings} onClose={() => setOpenSettings(false)} />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={'/pie'}>
                <PieChartPage />
              </Route>
              <Route exact path={'/bar'}>
                <BarChartPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </OpenSettingsContext.Provider>
    </div>
  );
}

export default App;
