import * as Styled from './PaginationSection.styled';
import { Dispatch, SetStateAction, useState } from 'react';
import { IssueType } from '../Issue/Issue';
import useBookmarkValue from '@/hooks/useBookmarkValue';
import issuesService from '@/api/service/issues';

interface PaginationSectionProps {
  issues: IssueType[];
  openIssueCount: number;
  setBookmarkRepoIssues: Dispatch<SetStateAction<IssueType[]>>;
}

export const PER_PAGE_OF_REPO = 5;
const PAGINATION_RANGE = 10;

const PaginationSection = ({
  issues,
  openIssueCount,
  setBookmarkRepoIssues,
}: PaginationSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const bookmark = useBookmarkValue();

  const PER_PAGE = PER_PAGE_OF_REPO * bookmark.length;
  const lastPage = Math.ceil(openIssueCount / PER_PAGE);
  const lastPageRange = lastPage % PAGINATION_RANGE;

  const numberOfPages = Array.from(
    {
      length: lastPage - lastPageRange < currentPage ? lastPageRange : PAGINATION_RANGE,
    },
    (_, index) => Math.floor((currentPage - 1) / 10) * 10 + index + 1
  );

  const handleFetchIssues = async (page: number) => {
    const fetchBookmarkIssues = bookmark.map(async ({ owner, name, full_name }) => {
      const { data } = await issuesService.getRepositoryIssues({
        owner: owner.login,
        repo: name,
        page: page,
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

    setCurrentPage(page);
  };

  const handleChangeNextPageRange = () => {
    const firstPageOfNextPageRange = Math.ceil(currentPage / 10) * 10 + 1;
    setCurrentPage(firstPageOfNextPageRange);
    handleFetchIssues(firstPageOfNextPageRange);
  };

  const handleChangePrevPageRange = () => {
    const firstPageOfPrevPageRange = Math.floor(currentPage / 10) * 10 - 9;
    setCurrentPage(firstPageOfPrevPageRange);
    handleFetchIssues(firstPageOfPrevPageRange);
  };
  return (
    <Styled.PaginationSection>
      {issues.length > 0 && (
        <Styled.Pagination>
          <Styled.PageRangeChangeButton
            type="button"
            onClick={handleChangePrevPageRange}
            disabled={currentPage <= 10}
          >
            Prev
          </Styled.PageRangeChangeButton>
          <Styled.PageList>
            {numberOfPages.map(pageNumber => (
              <Styled.PageNumber key={pageNumber}>
                <Styled.PageChangeButton
                  type="button"
                  onClick={() => handleFetchIssues(pageNumber)}
                  isCurrentPage={currentPage === pageNumber}
                >
                  {pageNumber}
                </Styled.PageChangeButton>
              </Styled.PageNumber>
            ))}
          </Styled.PageList>
          <Styled.PageRangeChangeButton
            type="button"
            onClick={handleChangeNextPageRange}
            disabled={lastPage - lastPageRange < currentPage}
          >
            Next
          </Styled.PageRangeChangeButton>
        </Styled.Pagination>
      )}
    </Styled.PaginationSection>
  );
};

export default PaginationSection;
