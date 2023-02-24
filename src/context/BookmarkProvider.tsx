import { RepositoryType } from '@/components/common/Repository/Repository';
import { LOCAL_STORAGE } from '@/constants/localStorage';
import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface BookMarkActions {
  addRepository: (repository: RepositoryType) => void;
  deleteRepository: (repositoryFullName: string) => void;
}

const BookmarkValueContext = createContext<RepositoryType[] | null>(null);
const BookmarkActionsContext = createContext<BookMarkActions | null>(null);

const BookmarkProvider = ({ children }: PropsWithChildren) => {
  const bookmarkInLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.BOOKMARK) ?? '[]');
  const [bookmarkValue, setBookmarkValue] = useState<RepositoryType[]>(bookmarkInLocalStorage);

  const actions: BookMarkActions = useMemo(
    () => ({
      addRepository(repository) {
        setBookmarkValue(prevBookmark => [...prevBookmark, repository]);
      },
      deleteRepository(repositoryFullName) {
        setBookmarkValue(prevBookmark =>
          prevBookmark.filter(({ full_name }) => repositoryFullName !== full_name)
        );
      },
    }),
    []
  );
  return (
    <BookmarkActionsContext.Provider value={actions}>
      <BookmarkValueContext.Provider value={bookmarkValue}>
        {children}
      </BookmarkValueContext.Provider>
    </BookmarkActionsContext.Provider>
  );
};

export default BookmarkProvider;
