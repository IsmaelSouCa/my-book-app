import type {IBook} from '../types/Interfaces';

function Book(book : IBook) {
  return (
    <div className="bg-white shadow-md rounded-lg m-4 w-64 h-80">
        <div className="h-50 justify-center">
            <img src={book.cover} alt={book.title} className="w-full h-full object-cover rounded-t-lg"/>
        </div>
        <div className="flex flex-col items-start p-4 h-32 justify-between">
            <p className="font-bold text-center">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-xs text-gray-400">Publicado: {book.published}</p>
            <span className={`text-xs font-semibold ${book.status === 'Leído' ? 
                'text-green-500 bg-green-200' : 'text-orange-500 bg-orange-200'} 
                px-1 py-0.5 rounded`}>{book.status}</span>
        </div>
    </div>
  );
}

export default Book;