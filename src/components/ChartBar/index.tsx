import * as React from 'react';
import {
  ValueAxis,
  BarSeries,
  Chart,
  Title,
  ArgumentAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, ValueScale } from '@devexpress/dx-react-chart';
import ChartContainer from '../ChartContainer';

interface IDataItem {
  barValue: number;
  barLabel: string;
}

export default class ChartBar extends React.Component<{ data: IDataItem[]; title: string }, {}> {
  render(): React.ReactNode {
    return (
      <ChartContainer>
        <Chart data={this.props.data}>
          <ValueScale name="barValue" />
          <ArgumentAxis />
          <ValueAxis scaleName="barValue" showGrid={false} showLine={true} showTicks={true} />

          <BarSeries
            name="Units Sold"
            valueField="barValue"
            argumentField="barLabel"
            scaleName="barValue"
          />
          <Title text={this.props.title} />
          <Animation />
        </Chart>
      </ChartContainer>
    );
  }
}
