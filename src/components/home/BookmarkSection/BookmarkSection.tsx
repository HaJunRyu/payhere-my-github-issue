import { Repositories } from '@/components/common';
import { ROUTE } from '@/constants/route';
import useBookmarkValue from '@/hooks/useBookmarkValue';
import { Link } from 'react-router-dom';
import * as Styled from './BookmarkSection.styled';

const BookmarkSection = () => {
  const bookmark = useBookmarkValue();
  return (
    <section>
      <Styled.Heading>Bookmarked Repositories</Styled.Heading>
      {bookmark.length > 0 ? (
        <Repositories repositories={bookmark} />
      ) : (
        <Styled.BookIsEmptyContainer>
          <Styled.EmptyMessage>북마크 된 저장소가 없습니다</Styled.EmptyMessage>
          <Styled.GoToSearchPage to={ROUTE.SEARCH}>Repository 검색 🔍</Styled.GoToSearchPage>
        </Styled.BookIsEmptyContainer>
      )}
    </section>
  );
};

export default BookmarkSection;
