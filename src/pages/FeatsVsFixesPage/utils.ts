import { Author, Commit } from '../../helpers/types';

/**
 * Gets the commit type based on a commit message
 * @param commitMessage The commit message
 * @returns whether the commit is a feat, fix or something else
 */
function getCommitType(commitMessage: string): 'feat' | 'fix' | 'else' {
  const generaliazedCommitMessage = commitMessage.toLowerCase().trim();
  if (generaliazedCommitMessage.substring(0, 5) === 'feat:') return 'feat';
  else if (generaliazedCommitMessage.substring(0, 4) === 'fix:') return 'fix';
  else return 'else';
}

/**
 * Goes through an array of commits and collects all the relevant data to feats, fixes, additions and deletions.
 * @param commits an array of commit
 * @returns an array of data about the different authors commits
 */
export function parseCommitData(commits: Array<Commit>): Author[] {
  const authors: Author[] = [];
  for (let i = 0; i < commits.length; i++) {
    const author = commits[i].author_email;
    let author_exists = false;
    const c_type = getCommitType(commits[i].message);
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
