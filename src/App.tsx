import { ThemeProvider } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { OpenSettingsContext } from './helpers/context';
import { darkTheme, lightTheme } from './helpers/themes';
import BarChartPage from './pages/BarChartPage';
import Home from './pages/Home/index';
import SettingsPage from './pages/SettingsPage/index';
import FeatsVsFixesPage from './pages/FeatsVsFixesPage';
import { Theme } from '@material-ui/core';

const themes = { light: lightTheme, dark: darkTheme };
function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [theme, setTheme] = useState<Theme>(lightTheme);
  useEffect(() => {
    // Load the todos on mount
    const storageString = localStorage.getItem('theme');
    if (storageString) {
      if (Object.prototype.hasOwnProperty.call(themes, storageString)) {
        // @ts-ignore
        setTheme(themes[storageString]);
      }
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
          />
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
      </OpenSettingsContext.Provider>
    </div>
  );
}

export default App;
