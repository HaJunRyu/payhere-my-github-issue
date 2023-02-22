import { Repositories, ScreenReaderOnly } from '@/components/common';
import * as Styled from './RepositoriesSection.styled';

interface RepositoriesSectionProps {}

const dummyRepos = [
  {
    fullName: 'dtrupenn/Tetris',
    description: 'A C implementation of Tetris using Pennsim through LC4',
    language: 'Typescript',
    isBookmarked: true,
    stargazersCount: 1,
  },
  {
    fullName: 'dtrupenn/Tetris',
    description: 'A C implementation of Tetris using Pennsim through LC4',
    language: 'Typescript',
    isBookmarked: false,
    stargazersCount: 1,
  },
];

const RepositoriesSection = ({}: RepositoriesSectionProps) => {
  return (
    <Styled.RepositoriesSection>
      <ScreenReaderOnly as="h2">Repositories</ScreenReaderOnly>
      <Repositories repositories={dummyRepos} />
    </Styled.RepositoriesSection>
  );
};

export default RepositoriesSection;
