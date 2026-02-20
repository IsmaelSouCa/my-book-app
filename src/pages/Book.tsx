interface Book {
    title: string;
    author: string;
    date: string;
    cover: string;
}

function Book() {
  return (
    <div className="bg-white shadow-md rounded-lg m-4 w-64 h-80 flex flex-col items-center">
        <div className="h-50 w-full rounded-lg overflow-hidden flex items-center justify-center">
            <img src="src/assets/61xfFSgNfBL._AC_UF1000,1000_QL80_.jpg" alt="Book Cover" className="w-full h-full object-cover" />
        </div>
    </div>
  );
}

export default Book;