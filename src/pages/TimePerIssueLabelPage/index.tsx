import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import ChartBar from '../../components/ChartBar/index';
import PageContainer from '../../components/PageContainer';
import { getIssuesFromAPI } from '../../helpers/api-calls';
import { difficultyLabels, otherLabels, techDescriptionLabels } from '../../helpers/constants';
import { useSessionStorage } from '../../helpers/hooks';
import { BarDataItem, Issue } from '../../helpers/types';
import useStyles from './styles';
import { avgTimePerIssueLabel } from './utils';

const difficultyLabelsString = JSON.stringify(difficultyLabels);
const techLabelsString = JSON.stringify(techDescriptionLabels);
const otherLabelsString = JSON.stringify(otherLabels);

export default function TimePerIssueLabelPage() {
  const [allIssueData, setAllIssueData] = useState<Issue[] | null>(null);
  const [data, setData] = useState<BarDataItem[] | null>(null);
  // The selected issueLabel groups are saved in each session.
  const [selected, setSelected] = useSessionStorage<string>(
    'issueLabelsSelected',
    difficultyLabelsString,
  );
  const classes = useStyles();

  // On page load, get the issues from the API and load it into a state.
  useEffect(() => {
    getIssuesFromAPI().then((res) => {
      // Since console.error makes sense here.
      // eslint-disable-next-line
      if (!res.ok) return console.error(res.status, res.data);
      setAllIssueData(res.data);
    });
  }, []);

  // Show data of selected labels when selected changes
  useEffect(() => {
    // If allIssueData or selected is null, something is not selected and or the data is not
    if (allIssueData == null) return;

    // Find the average time used to close an issue with one of the selected labels
    const selectedArray = JSON.parse(selected);
    const dataForRelevantIssues = avgTimePerIssueLabel(allIssueData, selectedArray);
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
          <InputLabel>Showing labels</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className={classes.select}
            value={selected}
            onChange={(e) => {
              const newValue = e.target.value as string;
              setSelected(newValue);
            }}
          >
            <MenuItem key={difficultyLabelsString} value={difficultyLabelsString}>
              <div>Difficulty</div>
            </MenuItem>
            <MenuItem key={techLabelsString} value={techLabelsString}>
              <div>Tech Description</div>
            </MenuItem>
            <MenuItem key={otherLabelsString} value={otherLabelsString}>
              <div>Other</div>
            </MenuItem>
          </Select>
        </FormControl>
        {data && <ChartBar data={data} title="Average close time per issue label" />}
      </div>
    </PageContainer>
  );
}
