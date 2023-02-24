import { searchService } from '@/api/service';
import useDebounce from '@/hooks/useDebounce';
import { SearchedRepositories } from '@/pages/Search';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './SearchSection.styled';

export const PER_PAGE = 20;

interface SearchSectionProps {
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  setSearchedRepositories: Dispatch<SetStateAction<SearchedRepositories>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const SearchSection = ({
  searchKeyword,
  setSearchKeyword,
  setSearchedRepositories,
  setCurrentPage,
}: SearchSectionProps) => {
  const handleChangeSearchKeyword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(target.value);
  };

  const handleFetchRepositories = useDebounce(async () => {
    if (searchKeyword.trim() === '') return;

    const response = await searchService.getRepositories({
      q: searchKeyword,
      page: 1,
      perPage: PER_PAGE,
    });

    const { items, total_count } = response.data;
    setSearchedRepositories({ repositories: items, totalCount: total_count });

    setCurrentPage(1);
  }, 500);

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
