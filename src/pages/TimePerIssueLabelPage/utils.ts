import { LABELS } from '../../helpers/constants';
import { BarDataItem, Issue } from '../../helpers/types';

type LabelData = {
  label: string;
  totalTime: number; // Time in seconds from start to close
  issueCount: number;
};

/**
 * Gets the average time used per issue label.
 * @param issues The issues to do the calculation on.
 * @returns A list of BarDataItems to be used to show in the ChartBar component.
 */
export const avgTimePerIssueLabel = (issues: Issue[], labels: LABELS[]): BarDataItem[] => {
  const labelDataList: LabelData[] = [];
  // Intiate the labelDataList with those labels
  labels.forEach((label) => {
    labelDataList.push({ label, totalTime: 0, issueCount: 0 });
  });

  // Add the time from the issue was created to it was closed (if it is closed)
  issues.forEach((issue) => {
    if (issue.closed_at == null) return;
    const start = new Date(issue.created_at);
    const end = new Date(issue.closed_at);
    const hoursUsed = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // end-start gives time different in milliseconds, converting to hours
    // Update the relevant values of labelDateList with the new time and issue
    labelDataList.forEach((labelData) => {
      if (issue.labels.indexOf(labelData.label) > -1) {
        labelData.totalTime += hoursUsed;
        labelData.issueCount += 1;
      }
    });
  });
  // Convert the labelDataList array to a BarDataItem array by averaging the totalTime by issueCount
  const barDataItems: BarDataItem[] = labelDataList.map((labelData) => {
    return {
      barLabel: labelData.label,
      barValue: labelData.issueCount === 0 ? 0 : labelData.totalTime / labelData.issueCount,
    };
  });
  return barDataItems;
};
