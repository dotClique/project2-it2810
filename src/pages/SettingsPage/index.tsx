import Popup from '../../components/Popup';
import { Theme } from '@material-ui/core';
import { themes } from '../../helpers/themes';
import { ChangeEvent } from 'react';
import ThemeRadioGroup from '../../components/ThemeRadioGroup';

type SettingsPageProps = {
  open: boolean;
  onClose: () => void;
  setTheme: (t: Theme) => void;
  themeName: string;
  setThemeName: (n: string) => void;
};

export default function SettingsPage(props: SettingsPageProps) {
  function changeTheme(event: ChangeEvent<HTMLInputElement>, value: string) {
    localStorage.setItem('theme', value);
    if (Object.prototype.hasOwnProperty.call(themes, value)) {
      const theme = value as keyof typeof themes;
      props.setTheme(themes[theme]);
      props.setThemeName(theme);
    }
  }
  return (
    <Popup title="Settings" open={props.open} onClose={props.onClose} maxWidth="sm">
      <ThemeRadioGroup onChange={changeTheme} themeName={props.themeName} />
    </Popup>
  );
}
