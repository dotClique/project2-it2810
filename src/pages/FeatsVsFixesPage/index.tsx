import PageContainer from '../../components/PageContainer/index';
import ChartPie from '../../components/ChartPie';
import { getAllCommitsFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { author, commit } from '../../helpers/types';
import { Checkbox } from '@material-ui/core';

function commit_type(commitMessage: string): 'feat' | 'fix' | 'else' {
  const generaliazedCommitMessage = commitMessage.toLowerCase().trim();
  if (generaliazedCommitMessage.substring(0, 5) === 'feat:') return 'feat';
  else if (generaliazedCommitMessage.substring(0, 4) === 'fix:') return 'fix';
  else return 'else';
}

function parse(commits: Array<commit>) {
  const authors: author[] = [];
  for (let i = 0; i < commits.length; i++) {
    const author = commits[i].author_email;
    let author_exists = false;
    const c_type = commit_type(commits[i].message);
    for (let j = 0; j < authors.length; j++) {
      if (authors[j].name == author) {
        author_exists = true;
        authors[j].num += 1;
        switch (c_type) {
          case 'feat':
            authors[j].feats++;
            break;
          case 'fix':
            authors[j].fixes++;
            break;
        }
        authors[j].additions += commits[i].stats.additions;
        authors[j].deletions += commits[i].stats.deletions;
      }
    }
    if (!author_exists) {
      authors.push({
        name: author,
        num: 1,
        feats: c_type == 'feat' ? 1 : 0,
        fixes: c_type == 'fix' ? 1 : 0,
        active: true,
        additions: commits[i].stats.additions,
        deletions: commits[i].stats.deletions,
      });
    }
  }
  return authors;
}

export default function FeatsVsFixesPage() {
  const [authorData, setAuthorData] = useState<author[]>([]);

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
        console.log(res);
        setAuthorData(parse(res));
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
