import { Chart, PieSeries, Title, Tooltip, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker, ArgumentScale } from '@devexpress/dx-react-chart';
import ChartContainer from '../ChartContainer';

type ChartPieProps = {
  data: { commitType: string; val: number }[];
  title?: string;
  legend?: boolean;
};

export default function ChartPie(props: ChartPieProps) {
  return (
    <ChartContainer>
      <Chart data={props.data}>
        <ArgumentScale />
        <PieSeries valueField="val" argumentField="commitType" innerRadius={0.6} />
        <Title text={props.title} />
        <EventTracker />
        <Tooltip />
        {props.legend ? <Legend position="right" /> : false}
        <Animation />
      </Chart>
    </ChartContainer>
  );
}
