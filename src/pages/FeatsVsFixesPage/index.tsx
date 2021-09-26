import PageContainer from '../../components/PageContainer/index';
import ChartPie from '../../components/ChartPie';
import { getAllCommitsFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { CommitAuthor } from '../../helpers/types';
import { Checkbox } from '@material-ui/core';
import { parseCommitData } from './utils';

export default function FeatsVsFixesPage() {
  const [authorData, setAuthorData] = useState<CommitAuthor[]>([]);

  let featsFixesGraphData: Array<{ commitType: string; val: number }> = [
    { commitType: 'feat', val: 0 },
    { commitType: 'fix', val: 0 },
  ];

  let additionsDeletionsGraphData: Array<{ commitType: string; val: number }> = [
    { commitType: 'additions', val: 0 },
    { commitType: 'deletions', val: 0 },
  ];

  for (let i = 0; i < authorData.length; i++) {
    if (authorData[i].active) {
      featsFixesGraphData[0].val += authorData[i].feats;
      featsFixesGraphData[1].val += authorData[i].fixes;
      additionsDeletionsGraphData[0].val += authorData[i].additions;
      additionsDeletionsGraphData[1].val += authorData[i].deletions;
    }
  }
  useEffect(() => {
    getAllCommitsFromAPI().then((res) => {
      if (res) {
        setAuthorData(parseCommitData(res));
      }
    });
  }, []);

  return (
    <PageContainer title="Commit statistics">
      Here you can see data about the ratio between feats and fixes, and the ratio between lines of
      code added and deleted. This is cumulative data of all the commits in the master branch. You
      can also choose who you want to see data about. This is anonymised to preserve the
      authors&apos; privacy.
      {authorData.map((m, i) => {
        if (m.feats || m.fixes) {
          return (
            <div key={i}>
              Person {i + 1}
              <Checkbox
                checked={m.active}
                onChange={() => {
                  const temp_list = [...authorData];
                  temp_list[i].active = !temp_list[i].active;
                  setAuthorData(temp_list);
                }}
              />
            </div>
          );
        }
      })}
      <ChartPie data={featsFixesGraphData} title={'feats vs fixes'} legend />
      <ChartPie data={additionsDeletionsGraphData} title={'additions vs deletions'} legend />
    </PageContainer>
  );
}
