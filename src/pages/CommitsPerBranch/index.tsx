import PageContainer from '../../components/PageContainer/index';
import ChartBar from '../../components/ChartBar';
import {
  getAllMergeRequestsFromAPI,
  getAllCommitsByMergeRequestFromAPI,
} from '../../helpers/api-calls';
import { useCallback, useEffect, useState } from 'react';
import { Commit, BarDataItem } from '../../helpers/types';
import { Switch } from '@material-ui/core/';
import useStyles from './styles';

export default function CommitsPerBranchPage() {
  const [data, setData] = useState<Array<BarDataItem> | null>(null);
  const [trueData, setTrueData] = useState<Array<BarDataItem> | null>(null);
  const [activeBranch, setActiveBranch] = useState<Map<string, boolean> | null>(null);
  const classes = useStyles();

  const getCommitsPerRequest = useCallback(() => {
    const commitsByBranch: Array<BarDataItem> = [];
    getAllMergeRequestsFromAPI().then((res) => {
      if (res) {
        getAllCommitsByMergeRequestFromAPI(res).then((res2) => {
          if (res2) {
            const activeBranches = new Map<string, boolean>();
            res2.forEach((value: Array<Commit>, key: number) => {
              activeBranches.set(String(key), true);
              if (
                !commitsByBranch.includes({
                  barLabel: String(key),
                  barValue: value.length,
                })
              ) {
                commitsByBranch.push({
                  barLabel: String(key),
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
  }, [setData, setTrueData, setActiveBranch]);

  useEffect(() => {
    getCommitsPerRequest();
  }, []);
  return (
    <PageContainer>
      <header />
      {data && <ChartBar data={data} title={'Commits by merge request iid'} />}
      <div className={classes.switchcontainer}>
        {trueData &&
          activeBranch &&
          trueData.map((m, i) => {
            if (m.barLabel || m.barValue) {
              return (
                <div key={i}>
                  <Switch
                    className={classes.switch}
                    checked={activeBranch.get(m.barLabel)}
                    onChange={() => {
                      activeBranch.set(m.barLabel, !activeBranch.get(m.barLabel));
                      const tempList = trueData.filter((data) => activeBranch.get(data.barLabel));
                      setData(tempList);
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
