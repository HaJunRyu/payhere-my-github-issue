import { BookmarkValueContext } from '@/context/BookmarkProvider';
import { useContext } from 'react';

const useBookmarkValue = () => {
  const value = useContext(BookmarkValueContext);
  if (value === null) {
    throw new Error('useBookmarkValue should be used within BookmarkProvider');
  }
  return value;
};

export default useBookmarkValue;
