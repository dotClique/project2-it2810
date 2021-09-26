import PageContainer from '../../components/PageContainer/index';
import ChartPie from '../../components/ChartPie';
import { getAllCommitsFromAPI } from '../../helpers/api-calls';
import { useEffect, useState } from 'react';
import { commit } from '../../helpers/types';
import { Checkbox } from '@material-ui/core';

function commit_type(commitMessage: string): 'feat' | 'fix' | 'else' {
  const generaliazedCommitMessage = commitMessage.toLowerCase().trim();
  if (generaliazedCommitMessage.substring(0, 5) === 'feat:') return 'feat';
  else if (generaliazedCommitMessage.substring(0, 4) === 'fix:') return 'fix';
  else return 'else';
}

function parse(commits: Array<commit>) {
  const authors: { name: string; num: number; feats: number; fixes: number; active: boolean }[] =
    [];
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
      }
    }
    if (!author_exists) {
      authors.push({
        name: author,
        num: 1,
        feats: c_type == 'feat' ? 1 : 0,
        fixes: c_type == 'fix' ? 1 : 0,
        active: true,
      });
    }
  }
  return authors;
}

export default function FeatsVsFixesPage() {
  const [authorData, setAuthorData] = useState<
    { name: string; num: number; feats: number; fixes: number; active: boolean }[]
  >([]);

  console.log(authorData);
  let graphData: Array<{ commitType: string; val: number }> = [
    { commitType: 'feat', val: 0 },
    { commitType: 'fix', val: 0 },
  ];

  for (let i = 0; i < authorData.length; i++) {
    if (authorData[i].active) {
      graphData[0].val += authorData[i].feats;
      graphData[1].val += authorData[i].fixes;
    }
  }
  useEffect(() => {
    getAllCommitsFromAPI().then((res) => {
      if (res) {
        setAuthorData(parse(res));
      }
    });
  }, []);

  return (
    <PageContainer title="Feats vs Fixes of contributers">
      {authorData.map((m, i) => {
        if (m.feats || m.fixes) {
          return (
            <>
              Person {i + 1}
              <Checkbox
                checked={m.active}
                key={i}
                onChange={() => {
                  const temp_list = [...authorData];
                  temp_list[i].active = !temp_list[i].active;
                  setAuthorData(temp_list);
                }}
              />
            </>
          );
        }
      })}

      <ChartPie data={graphData} title={'feats vs fixes'} legend />
    </PageContainer>
  );
}
