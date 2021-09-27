import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import ChartBar from '../../components/ChartBar/index';
import PageContainer from '../../components/PageContainer';
import { getIssuesFromAPI } from '../../helpers/api-calls';
import {
  difficultyLabels,
  Label,
  otherLabels,
  taskDescriptionLabels,
} from '../../helpers/constants';
import { BarDataItem, Issue } from '../../helpers/types';
import useStyles from './styles';
import { avgTimePerIssueLabel } from './utils';

export default function TimePerIssueLabelPage() {
  const [allIssueData, setAllIssueData] = useState<Issue[] | null>(null);
  const [data, setData] = useState<BarDataItem[] | null>(null);
  const [selected, setSelected] = useState<Label[]>(difficultyLabels);
  const classes = useStyles();

  // On page load, get the issues from the API and load it into a state.
  useEffect(() => {
    getIssuesFromAPI().then((res) => {
      // eslint-disable-next-line
      if (!res.ok) return console.error(res.status, res.data);
      setAllIssueData(res.data);
    });
  }, []);

  // Show data of selected labels when selected changes
  useEffect(() => {
    // If allIssueData or selected is null, something is not selected and or the data is not
    if (allIssueData == null) return;
    if (selected == null) return;

    // Find the average time used to close an issue with one of the selected labels
    const dataForRelevantIssues = avgTimePerIssueLabel(allIssueData, selected);
    setData(dataForRelevantIssues);
  }, [selected, allIssueData]);

  return (
    <PageContainer title="Average  Close Time Per Issue-label">
      <p>
        This counts only finished issues and it is the total time from the issue was created to it
        was closed.
      </p>
      <div>
        <FormControl className={classes.dropdown}>
          <InputLabel id="demo-simple-select-label">Showing labels</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            onChange={(e) => {
              const newValue = e.target.value as Label[];
              setSelected(newValue);
            }}
          >
            <MenuItem key={JSON.stringify(difficultyLabels)} value={difficultyLabels}>
              <div>Difficulty</div>
            </MenuItem>
            <MenuItem key={JSON.stringify(taskDescriptionLabels)} value={taskDescriptionLabels}>
              <div>Task Description</div>
            </MenuItem>
            <MenuItem key={JSON.stringify(otherLabels)} value={otherLabels}>
              <div>Other</div>
            </MenuItem>
          </Select>
        </FormControl>
        {data && <ChartBar data={data} title="Average close time per issue label" />}
      </div>
    </PageContainer>
  );
}
