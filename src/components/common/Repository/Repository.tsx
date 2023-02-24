import * as Styled from './Repository.styled.';
import { ReactComponent as StarIcon } from '@/assets/svg/star.svg';
import { RepositoryItem } from '@/types/dto/service';
import useBookmarkActions from '@/hooks/useBookmarkActions';
import useBookmarkValue from '@/hooks/useBookmarkValue';

export interface RepositoryType extends RepositoryItem {}

interface RepositoryProps {
  repository: RepositoryType;
}

const Repository = ({ repository }: RepositoryProps) => {
  const { full_name, description, language, stargazers_count } = repository;
  const bookmark = useBookmarkValue();
  const bookmarkActions = useBookmarkActions();

  const handleAddRepoToBookmark = () => {
    if (bookmark.length >= 4) {
      alert('북마크에는 4개의 저장소만 등록이 가능합니다.');
      return;
    }

    bookmarkActions.addRepository(repository);
  };

  const handleDeleteRepoInBookmark = () => {
    bookmarkActions.deleteRepository(full_name);
  };

  const isBookmarked = bookmark.some(bookmark => bookmark.full_name === full_name);

  return (
    <Styled.Repository>
      <Styled.RepoName>{full_name}</Styled.RepoName>
      <Styled.Description>{description}</Styled.Description>
      <Styled.AdditionalInfo>
        <Styled.Language>{language}</Styled.Language>
        <Styled.Stargazer>
          <StarIcon />
          <Styled.StarCount>{stargazers_count}</Styled.StarCount>
        </Styled.Stargazer>
      </Styled.AdditionalInfo>
      <Styled.BookMarkWrapper>
        <Styled.AddAndDeleteBookmarkButton
          type="button"
          onClick={isBookmarked ? handleDeleteRepoInBookmark : handleAddRepoToBookmark}
        >
          <Styled.BookMark>북마크 {isBookmarked ? '제거' : '추가'}</Styled.BookMark>
          {isBookmarked ? <Styled.Trash /> : <Styled.Plus />}
        </Styled.AddAndDeleteBookmarkButton>
      </Styled.BookMarkWrapper>
    </Styled.Repository>
  );
};

export default Repository;
