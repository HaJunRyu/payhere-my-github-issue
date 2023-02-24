import issuesService from '@/api/service/issues';
import { IssuesSection } from '@/components/issues';
import useBookmarkValue from '@/hooks/useBookmarkValue';
import { IssueItem } from '@/types/dto/issues';
import { useEffect, useState } from 'react';

const Issues = () => {
  const [bookmarkRepoIssues, setBookmarkRepoIssues] = useState<IssueItem[]>([]);
  const bookmark = useBookmarkValue();

  useEffect(() => {
    const fetchIssues = async () => {
      const fetchBookmarkIssues = bookmark.map(async ({ owner, name }) => {
        const response = await issuesService.getRepositoryIssues({
          owner: owner.login,
          repo: name,
          page: 1,
        });

        return response.data;
      });

      const bookmarkIssuesResponse = await Promise.all(fetchBookmarkIssues);
      const bookmarkIssues = bookmarkIssuesResponse.reduce((acc, issues) => {
        return [...acc, ...issues].sort((issueA, issueB) => {
          const issueADate = new Date(issueA.created_at).valueOf();
          const issueBDate = new Date(issueB.created_at).valueOf();
          return issueBDate - issueADate;
        });
      }, []);

      setBookmarkRepoIssues(bookmarkIssues);
    };

    fetchIssues();
  }, []);
  return (
    <main>
      <IssuesSection />
    </main>
  );
};

export default Issues;
