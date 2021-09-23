import PageContainer from '../../components/PageContainer/index';
import ChartPie from '../../components/ChartPie';

const data = [
  { commitType: 'feat', val: 4119626293 },
  { commitType: 'fix', val: 1012956064 },
];

export default function PieChartPage() {
  return (
    <PageContainer title="PieChart">
      <div>This is Pie Chart</div>
      <ChartPie data={data} title={'feats vs fixes'} />
    </PageContainer>
  );
}
