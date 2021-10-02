import PageContainer from '../../components/PageContainer/index';
import ChartBar from '../../components/ChartBar';
import { getAllBranchesFromAPI, getAllCommitsByBranchFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { Commit } from '../../helpers/types';
import { Checkbox } from '@material-ui/core';

export default function CommitsPerBranchPage() {
  const [data, setData] = useState<Array<{ barLabel: string; barValue: number }> | null>(null);
  const [trueData, setTrueData] = useState<Array<{ barLabel: string; barValue: number }> | null>(
    null,
  );
  const commitsByBranch: Array<{ barLabel: string; barValue: number }> = [];
  const [activeBranch, setActiveBranch] = useState<Map<string, boolean> | null>(null);

  useEffect(() => {
    getAllBranchesFromAPI().then((res) => {
      if (res) {
        getAllCommitsByBranchFromAPI(res).then((res2) => {
          if (res2) {
            let activeBranches = new Map<string, boolean>();
            res2.forEach((value: Array<Commit>, key: string) => {
              activeBranches.set(key.slice(0, 30), true);
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
            setTrueData(commitsByBranch);
            setActiveBranch(activeBranches);
          }
        });
      }
    });
  }, []);
  return (
    <PageContainer>
      <header></header>
      {data && <ChartBar data={data} title={'Commits by branch'} />}
      <div>
        {trueData &&
          activeBranch &&
          trueData.map((m, i) => {
            if (m.barLabel || m.barValue) {
              return (
                <div key={i}>
                  <Checkbox
                    checked={activeBranch.get(m.barLabel)}
                    onChange={() => {
                      activeBranch.set(m.barLabel, !activeBranch.get(m.barLabel));
                      const temp_list = [...trueData];
                      for (let i = 0; i < temp_list.length; i++) {
                        if (!activeBranch.get(temp_list[i].barLabel)) {
                          temp_list.splice(i, 1);
                          i--;
                        }
                      }
                      setData(temp_list);
                    }}
                  />
                  {m.barLabel}
                </div>
              );
            }
          })}
      </div>
    </PageContainer>
  );
}
