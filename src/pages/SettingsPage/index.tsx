import Popup from '../../components/Popup';

type SettingsPageProps = {
  open: boolean;
  onClose: () => void;
};

export default function SettingsPage(props: SettingsPageProps) {
  return (
    <Popup title="Settings" open={props.open} onClose={props.onClose} maxWidth="sm">
      <div>Here comes the settings page</div>
    </Popup>
  );
}
