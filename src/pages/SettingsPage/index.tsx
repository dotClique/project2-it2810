import Popup from '../../components/Popup';
import { Button, Theme } from '@material-ui/core';
import { lightTheme, darkTheme } from '../../helpers/themes';

type SettingsPageProps = {
  open: boolean;
  onClose: () => void;
  setTheme: (t: Theme) => void;
};

const themes = { light: lightTheme, dark: darkTheme };
export default function SettingsPage(props: SettingsPageProps) {
  function handleClickLight() {
    localStorage.setItem('theme', 'light');
    props.setTheme(themes.light);
  }
  function handleClickDark() {
    localStorage.setItem('theme', 'dark');
    props.setTheme(themes.dark);
  }
  return (
    <Popup title="Settings" open={props.open} onClose={props.onClose} maxWidth="sm">
      <div>Here comes the settings page</div>
      <Button onClick={handleClickLight}>Change theme light</Button>
      <Button onClick={handleClickDark}>Change theme dark</Button>
    </Popup>
  );
}
