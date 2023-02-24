import issuesService from '@/api/service/issues';
import { IssuesSection, PaginationSection } from '@/components/issues';
import { IssueType } from '@/components/issues/Issue/Issue';
import { PER_PAGE_OF_REPO } from '@/components/issues/PaginationSection/PaginationSection';
import useBookmarkValue from '@/hooks/useBookmarkValue';
import { useEffect, useState } from 'react';

const Issues = () => {
  const [bookmarkRepoIssues, setBookmarkRepoIssues] = useState<IssueType[]>([]);
  const bookmark = useBookmarkValue();

  const openIssueCount = bookmark.reduce(
    (totalOpenIssueCount, { open_issues_count }) => totalOpenIssueCount + open_issues_count,
    0
  );

  useEffect(() => {
    const fetchIssues = async () => {
      const fetchBookmarkIssues = bookmark.map(async ({ owner, name, full_name }) => {
        const { data } = await issuesService.getRepositoryIssues({
          owner: owner.login,
          repo: name,
          page: 1,
          perPage: PER_PAGE_OF_REPO,
        });

        const issuesWithRepoName = data.map(issue => ({ ...issue, repoName: full_name }));
        return issuesWithRepoName;
      });

      const bookmarkIssuesResponse = await Promise.all(fetchBookmarkIssues);
      const bookmarkIssues = bookmarkIssuesResponse.reduce((acc, issues) => {
        return [...acc, ...issues];
      }, []);

      bookmarkIssues.sort((issueA, issueB) => {
        const issueADate = new Date(issueA.created_at).valueOf();
        const issueBDate = new Date(issueB.created_at).valueOf();
        return issueBDate - issueADate;
      });

      setBookmarkRepoIssues(bookmarkIssues);
    };

    fetchIssues();
  }, []);

  return (
    <main>
      <IssuesSection issues={bookmarkRepoIssues} />
      <PaginationSection
        issues={bookmarkRepoIssues}
        openIssueCount={openIssueCount}
        setBookmarkRepoIssues={setBookmarkRepoIssues}
      />
    </main>
  );
};

export default Issues;
