import { useEffect, useState } from 'react';
import ChartBar from '../../components/ChartBar/index';
import PageContainer from '../../components/PageContainer';
import { getIssuesFromAPI } from '../../helpers/api-calls';
import { BarDataItem } from '../../helpers/types';
import { avgTimePerIssueLabel } from '../../helpers/utils';

export default function TimePerIssueLabelPage() {
  const [data, setData] = useState<BarDataItem[] | null>(null);

  useEffect(() => {
    getIssuesFromAPI().then((res) => {
      if (!res.ok) return console.log(res.status, res.data);
      setData(avgTimePerIssueLabel(res.data));
    });
  }, []);

  return (
    <PageContainer title="Average  Close Time Per Issue-label">
      <p>
        This counts only finished issues and it is the total time from the issue was created to it
        was closed.
      </p>
      <div>{data && <ChartBar data={data} title="Average close time per issue label" />}</div>
    </PageContainer>
  );
}
