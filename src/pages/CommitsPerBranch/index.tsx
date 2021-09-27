import PageContainer from '../../components/PageContainer/index';
import { getAllBranchesFromAPI } from '../../helpers/api-calls';
import { useEffect } from 'react';
//import { author, Branch, commit } from '../../helpers/types';

export default function CommitsPerBranchPage() {
  useEffect(() => {
    getAllBranchesFromAPI().then((res) => {
      if (res) {
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
