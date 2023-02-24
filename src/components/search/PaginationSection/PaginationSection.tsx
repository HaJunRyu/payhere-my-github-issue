import { SearchedRepositories } from '@/pages/Search';
import { PER_PAGE } from '@/components/search/SearchSection/SearchSection';
import * as Styled from './PaginationSection.styled';
import { Dispatch, SetStateAction } from 'react';
import { searchService } from '@/api/service';

interface PaginationSectionProps {
  searchedRepositories: SearchedRepositories;
  searchKeyword: string;
  setSearchedRepositories: Dispatch<SetStateAction<SearchedRepositories>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PAGINATION_RANGE = 10;

const PaginationSection = ({
  searchedRepositories,
  currentPage,
  searchKeyword,
  setCurrentPage,
  setSearchedRepositories,
}: PaginationSectionProps) => {
  const { repositories, totalCount } = searchedRepositories;

  const lastPage = Math.ceil(totalCount / PER_PAGE);
  const lastPageRange = lastPage % PAGINATION_RANGE;

  const numberOfPages = Array.from(
    {
      length: lastPage - lastPageRange < currentPage ? lastPageRange : PAGINATION_RANGE,
    },
    (_, index) => Math.floor((currentPage - 1) / 10) * 10 + index + 1
  );

  const handleFetchRepositories = async (page: number) => {
    const response = await searchService.getRepositories({
      q: searchKeyword,
      page,
      perPage: PER_PAGE,
    });

    const { items, total_count } = response.data;
    setSearchedRepositories({ repositories: items, totalCount: total_count });

    setCurrentPage(page);
  };

  const handleChangeNextPageRange = () => {
    const firstPageOfNextPageRange = Math.ceil(currentPage / 10) * 10 + 1;
    setCurrentPage(firstPageOfNextPageRange);
    handleFetchRepositories(firstPageOfNextPageRange);
  };

  const handleChangePrevPageRange = () => {
    const firstPageOfPrevPageRange = Math.floor(currentPage / 10) * 10 - 9;
    setCurrentPage(firstPageOfPrevPageRange);
    handleFetchRepositories(firstPageOfPrevPageRange);
  };
  return (
    <Styled.PaginationSection>
      {repositories.length > 0 && (
        <Styled.Pagination>
          <Styled.PageRangeChangeButton
            type="button"
            onClick={handleChangePrevPageRange}
            disabled={currentPage <= 10}
          >
            Prev
          </Styled.PageRangeChangeButton>
          <Styled.PageList>
            {numberOfPages.map(pageNumber => (
              <Styled.PageNumber key={pageNumber}>
                <Styled.PageChangeButton
                  type="button"
                  onClick={() => handleFetchRepositories(pageNumber)}
                  isCurrentPage={currentPage === pageNumber}
                >
                  {pageNumber}
                </Styled.PageChangeButton>
              </Styled.PageNumber>
            ))}
          </Styled.PageList>
          <Styled.PageRangeChangeButton
            type="button"
            onClick={handleChangeNextPageRange}
            disabled={lastPage - lastPageRange < currentPage}
          >
            Next
          </Styled.PageRangeChangeButton>
        </Styled.Pagination>
      )}
    </Styled.PaginationSection>
  );
};

export default PaginationSection;
