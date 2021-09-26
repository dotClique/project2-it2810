import PageContainer from '../../components/PageContainer/index';
import ChartPie from '../../components/ChartPie';
import { getAllCommitsFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { commit } from '../../helpers/types';

function commit_type(commitMessage: string): 'feat' | 'fix' | 'else' {
  const generaliazedCommitMessage = commitMessage.toLowerCase().trim();
  if (generaliazedCommitMessage.substring(0, 5) === 'feat:') return 'feat';
  else if (generaliazedCommitMessage.substring(0, 4) === 'fix:') return 'fix';
  else return 'else';
}

function parse(commits: Array<commit>) {
  let sum_feats = 0;
  let sum_fixes = 0;
  for (let i = 0; i < commits.length; i++) {
    const c_type = commit_type(commits[i].message);
    switch (c_type) {
      case 'feat':
        sum_feats++;
        break;
      case 'fix':
        sum_fixes++;
        break;
    }
  }
  return [
    { commitType: 'feat', val: sum_feats },
    { commitType: 'fix', val: sum_fixes },
  ];
}

export default function FeatsVsFixesPage() {
  const [graphData, setGraphData] = useState<Array<{ commitType: string; val: number }>>([
    { commitType: 'feat', val: 1 },
    { commitType: 'fix', val: 1 },
  ]);

  useEffect(() => {
    getAllCommitsFromAPI().then((res) => {
      if (res) {
        setGraphData(parse(res));
      }
    });
  }, []);

  return (
    <PageContainer title="Feats vs Fixes">
      <div>This is Pie Chart</div>
      <ChartPie data={graphData} title={'feats vs fixes'} legend />
    </PageContainer>
  );
}
