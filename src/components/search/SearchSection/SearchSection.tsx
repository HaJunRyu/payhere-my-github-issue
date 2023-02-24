import { searchService } from '@/api/service';
import useDebounce from '@/hooks/useDebounce';
import { SearchedRepositories } from '@/pages/Search';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
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

  const handleFetchRepositories = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchKeyword.trim() === '') return;

    const response = await searchService.getRepositories({
      q: searchKeyword,
      page: 1,
      perPage: PER_PAGE,
    });

    const { items, total_count } = response.data;
    setSearchedRepositories({ repositories: items, totalCount: total_count });

    setCurrentPage(1);
  };

  return (
    <section>
      <Styled.Heading>Find Repository</Styled.Heading>
      <form onSubmit={handleFetchRepositories}>
        <Styled.FormContainer>
          <Styled.FindRepositoryInput
            value={searchKeyword}
            onChange={handleChangeSearchKeyword}
            placeholder="Repository name을 입력하세요"
          />
          <Styled.SearchButton>검색</Styled.SearchButton>
        </Styled.FormContainer>
      </form>
    </section>
  );
};

export default SearchSection;
