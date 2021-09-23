import PageContainer from '../../components/PageContainer/index';
import ChartBar from '../../components/ChartBar';

const data = [
  { barValue: 4119626293, barLabel: 'Petter' },
  { barValue: 1012956064, barLabel: 'Ole' },
];

export default function BarChartPage() {
  return (
    <PageContainer title="BarChart">
      <div>This is Bar Chart</div>
      <ChartBar data={data} title={'Ole og petter'} />
    </PageContainer>
  );
}
