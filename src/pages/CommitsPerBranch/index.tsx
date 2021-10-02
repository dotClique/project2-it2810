import PageContainer from '../../components/PageContainer/index';
import { getAllBranchesFromAPI, getAllCommitsByBranchFromAPI } from '../../helpers/api-calls';
import { useEffect } from 'react';
import { commit } from '../../helpers/types';

export default function CommitsPerBranchPage() {
  useEffect(() => {
    getAllBranchesFromAPI().then((res) => {
      if (res) {
        for (let i = 0; i < res.length; i++) {
          getAllCommitsByBranchFromAPI(res).then((res2) => {
            if (res2) {
              res2.forEach((value: Array<commit>, key: string) => {
                if (key === 'master') {
                  return;
                } else {
                  const master: commit[] = res2.get('master') || new Array<commit>();
                  for (let j = 0; j < value.length; j++) {
                    master.forEach((mastercommit: commit) => {
                      if (mastercommit.id == value[j].id) {
                        // @ts-ignore
                        res2.get(key).splice(j, 1);
                        j--;
                        return;
                      }
                    });
                  }
                }
              });
              console.log(res2);
            }
          });
        }
        console.log(res);
      }
    });
  }, []);
  return (
    <PageContainer>
      <header>hi</header>
    </PageContainer>
  );
}
