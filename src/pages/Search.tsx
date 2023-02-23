import { RepositoryType } from '@/components/common/Repository/Repository';
import { RepositoriesSection, SearchSection } from '@/components/search';
import { useState } from 'react';

const Search = () => {
  const [searchedRepositories, setSearchedRepositories] = useState<RepositoryType[]>([]);

  return (
    <main>
      <SearchSection setSearchedRepositories={setSearchedRepositories} />
      <RepositoriesSection repositories={searchedRepositories} />
    </main>
  );
};

export default Search;
