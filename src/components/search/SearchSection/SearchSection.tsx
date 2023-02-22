import * as Styled from './SearchSection.styled';

interface SearchSectionProps {}

const SearchSection = ({}: SearchSectionProps) => {
  return (
    <section>
      <Styled.Heading>Find Repository</Styled.Heading>
      <Styled.FindRepositoryInput placeholder="Repository name을 입력하세요" />
    </section>
  );
};

export default SearchSection;
