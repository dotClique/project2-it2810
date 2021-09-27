import { Animation, ValueScale } from '@devexpress/dx-react-chart';
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Title,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Component } from 'react';
import { BarDataItem } from '../../helpers/types';
import ChartContainer from '../ChartContainer';

type CharBarProps = {
  data: BarDataItem[];
  title: string;
};

export default class ChartBar extends Component<CharBarProps> {
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
