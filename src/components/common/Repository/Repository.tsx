import * as Styled from './Repository.styled.';
import { ReactComponent as StarIcon } from '@/assets/svg/star.svg';
import { RepositoryItem } from '@/types/dto/service';

export interface RepositoryType extends RepositoryItem {
  isBookmarked?: boolean;
}

interface RepositoryProps extends RepositoryType {}

const Repository = ({
  description,
  full_name,
  isBookmarked,
  language,
  stargazers_count,
}: RepositoryProps) => {
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
        <Styled.BookMark>북마크 {isBookmarked ? '제거' : '추가'}</Styled.BookMark>
        {isBookmarked ? <Styled.Trash /> : <Styled.Plus />}
      </Styled.BookMarkWrapper>
    </Styled.Repository>
  );
};

export default Repository;
