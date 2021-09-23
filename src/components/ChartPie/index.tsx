import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Title, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';

type ChartPieProps = {
  data: { commitType: string; val: number }[];
  title?: string;
};

export default function ChartPie(props: ChartPieProps) {
  return (
    <Paper>
      <Chart data={props.data}>
        <PieSeries valueField="val" argumentField="commitType" innerRadius={0.6} />
        <Title text={props.title} />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  );
}
