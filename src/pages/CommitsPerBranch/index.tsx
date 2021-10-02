import PageContainer from '../../components/PageContainer/index';
import ChartBar from '../../components/ChartBar';
import { getAllBranchesFromAPI, getAllCommitsByBranchFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { Commit } from '../../helpers/types';

export default function CommitsPerBranchPage() {
  const [data, setData] = useState<Array<{ barLabel: string; barValue: number }> | null>(null);
  const commitsByBranch: Array<{ barLabel: string; barValue: number }> = [];

  useEffect(() => {
    getAllBranchesFromAPI().then((res) => {
      if (res) {
        getAllCommitsByBranchFromAPI(res).then((res2) => {
          if (res2) {
            res2.forEach((value: Array<Commit>, key: string) => {
              if (key !== 'master') {
                const master: Commit[] = res2.get('master') || new Array<Commit>();
                for (let j = 0; j < value.length; j++) {
                  master.forEach((masterCommit: Commit) => {
                    if (masterCommit.id == value[j].id) {
                      // @ts-ignore
                      res2.get(key).splice(j, 1);
                      j--;
                      return;
                    }
                  });
                }
              }
              if (!commitsByBranch.includes({ barLabel: key, barValue: value.length })) {
                commitsByBranch.push({ barLabel: key.slice(0, 30), barValue: value.length });
              }
            });
            setData(commitsByBranch);
          }
        });
      }
    });
  }, []);
  return (
    <PageContainer>
      <header>hi</header>
      {data && <ChartBar data={data} title={'Commits by branch'} />}
    </PageContainer>
  );
}
