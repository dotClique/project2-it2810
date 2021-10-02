import { ThemeProvider } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CommonLogic from './components/CommonLogic/index';
import NavBar from './components/NavBar';
import { OpenSettingsContext } from './helpers/context';
import { themes } from './helpers/themes';
import BarChartPage from './pages/BarChartPage';
import Home from './pages/Home/index';
import SettingsPage from './pages/SettingsPage/index';
import FeatsVsFixesPage from './pages/FeatsVsFixesPage';
import TimePerIssueLabelPage from './pages/TimePerIssueLabelPage/index';
import { Theme } from '@material-ui/core';
import { useLocalStorageString } from './helpers/hooks';

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [theme, setTheme] = useState<Theme>(themes.light);
  const [themeName, setThemeName] = useLocalStorageString<keyof typeof themes>(`theme`, 'light');

  // Get the theme from localstorage
  useEffect(() => {
    console.log(themeName);
    if (themeName !== undefined) {
      setTheme(themes[themeName]);
      console.log(theme);
    }
  }, []);

  return (
    <div className="App">
      <OpenSettingsContext.Provider value={[openSettings, setOpenSettings]}>
        <ThemeProvider theme={theme}>
          <SettingsPage
            open={openSettings}
            onClose={() => setOpenSettings(false)}
            setTheme={setTheme}
            themeName={themeName}
            setThemeName={setThemeName}
          />
          <NavBar title="CoolWebsiteName" />
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
