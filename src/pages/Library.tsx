import Book from './Book';
import type { IBook } from '../types/Interfaces';

interface IProps {
    books: IBook[];
}

function Library({ books }: IProps) {
  return (
    <div className="grid p-4 gap-4 grid-cols-1 
    sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Book 
          ISBN={book.ISBN}
          title={book.title}
          author={book.author}
          published={book.published}
          cover={book.cover}
          status={book.status}
          isFavorite={book.isFavorite}
        />
      ))}
    </div>
  );
}

export default Library;