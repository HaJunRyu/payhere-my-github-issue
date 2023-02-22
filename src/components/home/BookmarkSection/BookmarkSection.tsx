import { Repositories } from '@/components/common';
import * as Styled from './BookmarkSection.styled';

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

const BookmarkSection = () => {
  return (
    <Styled.BookmarkSection>
      <Repositories repositories={dummyRepos} />
    </Styled.BookmarkSection>
  );
};

export default BookmarkSection;
