import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useStyles } from './styles';
import { ChangeEvent } from 'react';
import { themes } from '../../helpers/themes';

type ThemeRadioGroupProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
};

/**
 * A component making a popup dialog with the desired format
 */
export default function ThemeRadioGroup(props: ThemeRadioGroupProps) {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className={classes.legend}>
        Theme
      </FormLabel>
      <RadioGroup
        defaultValue="female"
        aria-label="gender"
        name="customized-radios"
        onChange={props.onChange}
      >
        {Object.keys(themes).map((themeName) => {
          return (
            <FormControlLabel
              className={classes.radio}
              key={themeName}
              value={themeName}
              label={themeName}
              control={<Radio className={classes.radio} />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
