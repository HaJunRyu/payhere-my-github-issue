import { Issue } from '@/components/issues';
import { ROUTE } from '@/constants/route';
import useBookmarkValue from '@/hooks/useBookmarkValue';
import { IssueType } from '../Issue/Issue';
import * as Styled from './IssuesSection.styled';

interface IssuesSectionProps {
  issues: IssueType[];
}

const IssuesSection = ({ issues }: IssuesSectionProps) => {
  const bookmark = useBookmarkValue();
  return (
    <section>
      <Styled.Heading>Bookmark Repository Issues</Styled.Heading>
      <Styled.Issues>
        {bookmark.length > 0 ? (
          <>
            {issues.map(issue => (
              <Issue issue={issue} key={issue.html_url} />
            ))}
          </>
        ) : (
          <Styled.BookmarkIsEmptyContainer>
            <Styled.EmptyMessage>북마크 된 저장소가 없습니다</Styled.EmptyMessage>
            <Styled.GoToSearchPage to={ROUTE.SEARCH}>Repository 검색 🔍</Styled.GoToSearchPage>
          </Styled.BookmarkIsEmptyContainer>
        )}
      </Styled.Issues>
    </section>
  );
};

export default IssuesSection;
