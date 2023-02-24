import { BookmarkActionsContext } from '@/context/BookmarkProvider';
import { useContext } from 'react';

const useBookmarkActions = () => {
  const actions = useContext(BookmarkActionsContext);
  if (actions === null) {
    throw new Error('useBookmarkActions should be used within BookmarkProvider');
  }
  return actions;
};

export default useBookmarkActions;
