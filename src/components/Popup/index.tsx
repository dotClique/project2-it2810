import { XIcon } from '@heroicons/react/outline';
import { Dialog, DialogProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles';
import { ReactNode } from 'react';

type PopupProps = {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  maxWidth?: DialogProps['maxWidth'];
};

/**
 * A component making a popup dialog with the desired format
 */
export default function Popup(props: PopupProps) {
  const classes = useStyles();
  return (
    <Dialog
      open={props.open}
      onClose={(_event, reason) => reason !== 'backdropClick' && props.onClose()}
      fullWidth={true}
      maxWidth={props.maxWidth ?? 'xs'}
      PaperProps={{ className: classes.dialog }}
    >
      <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
        <XIcon width="1em" />
      </IconButton>
      <h1 id="dialogTitle" className={classes.title}>
        {props.title}
      </h1>
      <div className={classes.contentDiv}>{props.children}</div>
    </Dialog>
  );
}
