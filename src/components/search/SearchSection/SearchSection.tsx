import { searchService } from '@/api/service';
import { RepositoryType } from '@/components/common/Repository/Repository';
import useDebounce from '@/hooks/useDebounce';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './SearchSection.styled';

interface SearchSectionProps {
  setSearchedRepositories: Dispatch<SetStateAction<RepositoryType[]>>;
}

const SearchSection = ({ setSearchedRepositories }: SearchSectionProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChangeSearchKeyword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(target.value);
  };

  const handleFetchRepositories = useDebounce(async () => {
    const response = await searchService.getRepositories({ q: searchKeyword, page: 1 });

    setSearchedRepositories(response.data.items);
  }, 200);

  return (
    <section>
      <Styled.Heading>Find Repository</Styled.Heading>
      <Styled.FindRepositoryInput
        value={searchKeyword}
        onChange={e => {
          handleChangeSearchKeyword(e);
          handleFetchRepositories();
        }}
        placeholder="Repository name을 입력하세요"
      />
    </section>
  );
};

export default SearchSection;
