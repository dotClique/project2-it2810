import { Checkbox } from '@material-ui/core';
import { useEffect, useState } from 'react';
import ChartPie from '../../components/ChartPie';
import PageContainer from '../../components/PageContainer/index';
import { getAllCommitsFromAPI } from '../../helpers/api-calls';
import { useSessionStorage } from '../../helpers/hooks';
import { CommitAuthor } from '../../helpers/types';
import { parseCommitData } from './utils';
import { useStyles } from './styles';

export default function FeatsVsFixesPage() {
  // The retrieved athor data form the api.
  const [authorData, setAuthorData] = useState<CommitAuthor[]>([]);
  // The selected showing authors (default all selected), settings are saved in sessions.
  const [selectedAuthors, setSelectedAuthors] = useSessionStorage<boolean[]>(
    'selectedAuthorsFeatsVsFixes',
    new Array(authorData.length).fill(true),
  );

  const classes = useStyles();
  const featsFixesGraphData: Array<{ commitType: string; val: number }> = [
    { commitType: 'feat', val: 0 },
    { commitType: 'fix', val: 0 },
  ];

  const additionsDeletionsGraphData: Array<{ commitType: string; val: number }> = [
    { commitType: 'additions', val: 0 },
    { commitType: 'deletions', val: 0 },
  ];

  for (let i = 0; i < authorData.length; i++) {
    if (selectedAuthors[i]) {
      featsFixesGraphData[0].val += authorData[i].feats;
      featsFixesGraphData[1].val += authorData[i].fixes;

      // only add data if author has any feats or fixes
      if (authorData[i].feats || authorData[i].fixes) {
        additionsDeletionsGraphData[0].val += authorData[i].additions;
        additionsDeletionsGraphData[1].val += authorData[i].deletions;
      }
    }
  }
  useEffect(() => {
    getAllCommitsFromAPI().then((res) => {
      if (res) {
        const parsedData = parseCommitData(res);
        setAuthorData(parsedData);
        if (!selectedAuthors.length) setSelectedAuthors(new Array(parsedData.length).fill(true));
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
            <div key={JSON.stringify(m)}>
              Person {i + 1}
              <Checkbox
                className={classes.checkbox}
                checked={selectedAuthors[i] || false}
                onChange={() => {
                  if (!selectedAuthors) return; // selectedAuthors will never be undefined
                  const tempList = [...selectedAuthors];
                  tempList[i] = !tempList[i];
                  setSelectedAuthors(tempList);
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
