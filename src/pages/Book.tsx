import type {IBook} from '../types/Interfaces';
import IconButton from '../components/IconButton';
import { useState } from 'react';


function Book(book : IBook) {

  const [status, setStatus] = useState(book.status);

  function toggleStatus() {
    setStatus(status === 'Leído' ? 'Pendiente' : 'Leído');
  }

  return (
    <div className="bg-white shadow-md rounded-lg w-64 flex flex-col">
      <div className="h-52">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-4 min-h-32 gap-1">
        <p className="font-bold text-left w-full line-clamp-2">
          {book.title}
        </p>
          <p className="text-sm text-gray-500 text-left">{book.author}</p>
          <p className="text-xs text-gray-400 text-left">Publicado: {book.published}</p>
          <p onClick={toggleStatus} className={`text-xs font-semibold px-1 py-0.5 rounded w-20 text-center cursor-pointer
            ${status === 'Leído' ? 'text-green-500 bg-green-200' : 'text-orange-500 bg-orange-200'}`}>
          {status}
          </p>
        <IconButton status={book.isFavorite}/>
      </div>
    </div>
  );
}

export default Book;