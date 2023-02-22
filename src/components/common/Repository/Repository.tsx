import * as Styled from './Repository.styled.';
import { ReactComponent as StarIcon } from '@/assets/svg/star.svg';

export interface RepositoryType {
  fullName: string;
  description: string;
  language: string;
  isBookmarked: boolean;
  stargazersCount: number;
}

interface RepositoryProps extends RepositoryType {}

const Repository = ({
  description,
  fullName,
  isBookmarked,
  language,
  stargazersCount,
}: RepositoryProps) => {
  return (
    <Styled.Repository>
      <Styled.RepoName>{fullName}</Styled.RepoName>
      <Styled.Description>{description}</Styled.Description>
      <Styled.AdditionalInfo>
        <Styled.Language>{language}</Styled.Language>
        <Styled.Stargazer>
          <StarIcon />
          <Styled.StarCount>{stargazersCount}</Styled.StarCount>
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
