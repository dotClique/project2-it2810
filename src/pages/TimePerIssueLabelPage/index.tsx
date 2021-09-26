import { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer';
import { getIssuesFromAPI } from '../../helpers/api-calls';
import { Issue } from '../../helpers/types';

export default function TimePerIssueLabelPage() {
  const [state, setState] = useState<Issue[] | null>(null);

  useEffect(() => {
    getIssuesFromAPI().then((res) => {
      if (!res.ok) return console.log(res.status, res.data);
      setState(res.data);
    });
  }, []);

  return (
    <PageContainer title="Average Time Per Issue-label">
      <div>
        <p>Something</p>
        <pre>{JSON.stringify(state ?? {}, null, 2)}</pre>
      </div>
    </PageContainer>
  );
}
