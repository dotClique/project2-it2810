import PageContainer from '../../components/PageContainer/index';
import { getAllBranchesFromAPI, getAllCommitsByBranchFromAPI } from '../../helpers/api-calls';
import { useEffect } from 'react';
//import { author, Branch, commit } from '../../helpers/types';

export default function CommitsPerBranchPage() {
  useEffect(() => {
    getAllBranchesFromAPI().then((res) => {
      if (res) {
        /*for (let i = 0; i < res.length; i++) {
          getAllCommitsByBranchFromAPI(res[i].name).then((res2) => {
            if (res2) {
              console.log(res2);
            }
          });
        }*/
        console.log(res);
      }
    });

    getAllCommitsByBranchFromAPI('master').then((res2) => {
      if (res2) {
        console.log(res2);
      }
    });
  }, []);
  return (
    <PageContainer>
      <header>hi</header>
    </PageContainer>
  );
}
