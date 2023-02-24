import { RepositoryType } from '@/components/common/Repository/Repository';
import { PaginationSection, RepositoriesSection, SearchSection } from '@/components/search';
import { useState } from 'react';

export interface SearchedRepositories {
  repositories: RepositoryType[];
  totalCount: number;
}

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [searchedRepositories, setSearchedRepositories] = useState<SearchedRepositories>({
    repositories: [],
    totalCount: 0,
  });

  return (
    <main>
      <SearchSection
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        setSearchedRepositories={setSearchedRepositories}
        setCurrentPage={setCurrentPage}
      />
      <RepositoriesSection searchedRepositories={searchedRepositories} />
      <PaginationSection
        searchedRepositories={searchedRepositories}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchKeyword={searchKeyword}
        setSearchedRepositories={setSearchedRepositories}
      />
    </main>
  );
};

export default Search;
