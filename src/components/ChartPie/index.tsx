import { Animation, ArgumentScale, EventTracker } from '@devexpress/dx-react-chart';
import { Chart, Legend, PieSeries, Title, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { PieDataItem } from '../../helpers/types';
import ChartContainer from '../ChartContainer';

type ChartPieProps = {
  data: PieDataItem[];
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
