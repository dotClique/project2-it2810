import PageContainer from '../../components/PageContainer/index';
import ChartBar from '../../components/ChartBar';
import {
  getAllMergeRequestsFromAPI,
  getAllCommitsByMergeRequestFromAPI,
} from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { Commit } from '../../helpers/types';
import { Switch } from '@material-ui/core/';

export default function CommitsPerBranchPage() {
  const [data, setData] = useState<Array<{ barLabel: string; barValue: number }> | null>(null);
  const [trueData, setTrueData] = useState<Array<{ barLabel: string; barValue: number }> | null>(
    null,
  );
  const commitsByBranch: Array<{ barLabel: string; barValue: number }> = [];
  const [activeBranch, setActiveBranch] = useState<Map<string, boolean> | null>(null);

  useEffect(() => {
    getAllMergeRequestsFromAPI().then((res) => {
      if (res) {
        getAllCommitsByMergeRequestFromAPI(res).then((res2) => {
          if (res2) {
            const activeBranches = new Map<string, boolean>();
            res2.forEach((value: Array<Commit>, key: number) => {
              activeBranches.set(String(key) as string, true);
              if (
                !commitsByBranch.includes({
                  barLabel: String(key) as string,
                  barValue: value.length,
                })
              ) {
                commitsByBranch.push({
                  barLabel: String(key) as string,
                  barValue: value.length,
                });
              }
            });
            commitsByBranch.reverse();
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
      {data && <ChartBar data={data} title={'Commits by merge request iid'} />}
      <div>
        {trueData &&
          activeBranch &&
          trueData.map((m, i) => {
            if (m.barLabel || m.barValue) {
              return (
                <div key={i}>
                  <Switch
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
                  Merge Request no. {m.barLabel}
                </div>
              );
            }
          })}
      </div>
    </PageContainer>
  );
}
