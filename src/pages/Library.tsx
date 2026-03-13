import Book from './Book';
import type { IBook } from '../types/Interfaces';
import { useState, useEffect } from 'react';



interface IProps {
    books: IBook[];
}

function Library({ books }: IProps) {

  const [page, setPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(4);

  useEffect(()=>{

    function updateBooksPerPage(){
      if (window.innerWidth < 640) {
        setBooksPerPage(1);
      } else if (window.innerWidth < 891) {
        setBooksPerPage(2);
      } else if (window.innerWidth < 1151) {
        setBooksPerPage(3);
      } else {
        setBooksPerPage(4);
      }
    }

    updateBooksPerPage();

    window.addEventListener("resize", updateBooksPerPage)

    return () => window.removeEventListener("resize", updateBooksPerPage)

  }, []);

  const totalPages = books.length / booksPerPage
  const goNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const goBack = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
    <div className={`grid p-4 gap-4 ${booksPerPage === 1? "grid-cols-1" : booksPerPage === 2? "grid-cols-2" : booksPerPage === 3? "grid-cols-3" : "grid-cols-4"}`}>
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
    <div>
      <div className="flex justify-center gap-4">
        <button
          onClick={goBack}
          disabled={page === 1}
          className={`px-6 py-2 rounded-md text-white ${
            page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Anterior
        </button>

        <button
          onClick={goNext}
          disabled={page === totalPages}
          className={`px-6 py-2 rounded-md text-white ${
            page === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
    </>
  );
}

export default Library;