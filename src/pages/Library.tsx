import Book from './Book';
import type { IBook } from '../types/Interfaces';
import { useState, useEffect } from 'react';



interface IProps {
    books: IBook[];
}

function Library({ books }: IProps) {

  const [page, setPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(4);

  const [searchText, setSearchText] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'todos' | 'Leído' | 'Pendiente'>('todos');

  const filteredBooks = books.filter((book) => {
    const matchesSearchText = book.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatusFilter = statusFilter === 'todos' || book.status === statusFilter;
    return matchesSearchText && matchesStatusFilter;
  });

  useEffect(() => {
    setPage(1);
  }, [searchText, statusFilter]);

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

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
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

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  return (
    <>
    <div className={`bg-white ${booksPerPage === 1? 'flex-col h-19 w-64 justify-around': 'h-11 justify-around'} flex items-center rounded-xl m-auto transition-all duration-300 mb-4`}>
      <input 
        className='bg-[#ededed] rounded-3xl text-center w-56'
        type="text" 
        placeholder='Buscar por título...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select name="filter" id="filter" className='bg-white rounded w-32' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'todos' | 'Leído' | 'Pendiente')}>
        <option value="todos">Todos</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Leído">Leído</option>
      </select>
    </div>
    <div className={`grid p-4 gap-4 ${booksPerPage === 1? "grid-cols-1" : booksPerPage === 2? "grid-cols-2" : booksPerPage === 3? "grid-cols-3" : "grid-cols-4"}`}>
        {currentBooks.map((book) => (

           <Book
           key={book.title}
            title={book.title}
            author={book.author}
            published={book.published}
            cover={book.cover}
            status={book.status}
            isFavorite={book.isFavorite}
            ISBN={book.ISBN}
           />
           
        ))}
    </div>
    <div className={`${booksPerPage === 1? "flex-col" : "flex"} p-4 justify-center items-center gap-12`}>
      <button
        onClick={goBack}
        disabled={page === 1}
        className={`px-6 py-2 rounded-md text-white ${booksPerPage === 1? "w-64" : "w-32"} 
        ${page === 1? "bg-gray-400": "bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:cursor-pointer"}`}
      >
        Anterior
      </button>
      <p>
        ({page} / {totalPages})
      </p>
      <button
        onClick={goNext}
        disabled={page === totalPages}
        className={`px-6 py-2 rounded-md text-white ${booksPerPage === 1? "w-64" : "w-32"}
        ${page === totalPages? "bg-gray-400": "bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:cursor-pointer"}`}>
        Siguiente
      </button>
    </div>
    </>
  );
}

export default Library;