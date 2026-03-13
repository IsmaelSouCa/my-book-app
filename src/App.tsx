import './App.css'
import Header from './components/Header'
import Library from './pages/Library'
import type {IBook} from './types/Interfaces'

function App() {

  const books: IBook[] = [
  {
    ISBN: '',
    title: 'El Cuarto Mono',
    author: 'J. D. Barker',
    published: '27/06/2017',
    cover: 'https://m.media-amazon.com/images/I/61xfFSgNfBL.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '',
    title: 'La Chica de Nieve',
    author: 'Javier Castillo',
    published: '12/03/2020',
    cover: 'https://covers.openlibrary.org/b/isbn/9788491292661-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '',
    title: 'La Asistenta',
    author: 'Freida McFadden',
    published: '05/10/2023',
    cover: 'https://imagessl3.casadellibro.com/a/l/s5/83/9788491294283.webp',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '',
    title: 'Así es la puta vida',
    author: 'Jordi Wild',
    published: '03/11/2022',
    cover: 'https://m.media-amazon.com/images/I/81VElie-+DL._AC_UF1000,1000_QL80_.jpg',
    status: 'Leído',
    isFavorite: true
  },
  {
    ISBN: '',
    title: 'Los secretos de YouTube',
    author: 'TheGrefg',
    published: '27/11/2018',
    cover: 'https://m.media-amazon.com/images/I/61RwktFr5NL.jpg',
    status: 'Pendiente',
    isFavorite: true
  }, 
    {
    ISBN: '9780307743657',
    title: 'La chica del tren',
    author: 'Paula Hawkins',
    published: '13/01/2015',
    cover: 'https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780307588364',
    title: 'Perdida',
    author: 'Gillian Flynn',
    published: '05/06/2012',
    cover: 'https://covers.openlibrary.org/b/isbn/9780307588364-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9781501132933',
    title: 'La mujer del camarote 10',
    author: 'Ruth Ware',
    published: '19/07/2016',
    cover: 'https://covers.openlibrary.org/b/isbn/9781501132933-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9781472252746',
    title: 'Blood Orange',
    author: 'Harriet Tyce',
    published: '01/08/2019',
    cover: 'https://covers.openlibrary.org/b/isbn/9781472252746-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780452284234',
    title: 'Ángeles y Demonios',
    author: 'Dan Brown',
    published: '01/05/2000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780452284234-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780307474278',
    title: 'El Código Da Vinci',
    author: 'Dan Brown',
    published: '18/03/2003',
    cover: 'https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780345538376',
    title: 'Inferno',
    author: 'Dan Brown',
    published: '14/05/2013',
    cover: 'https://covers.openlibrary.org/b/isbn/9780345538376-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780450411434',
    title: 'El Resplandor',
    author: 'Stephen King',
    published: '28/01/1977',
    cover: 'https://covers.openlibrary.org/b/isbn/9780450411434-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9788497592208',
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    published: '27/03/2007',
    cover: 'https://covers.openlibrary.org/b/isbn/9788497592208-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9788401352836',
    title: 'Juego de Tronos',
    author: 'George R. R. Martin',
    published: '06/08/1996',
    cover: 'https://covers.openlibrary.org/b/isbn/9788401352836-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780345339683',
    title: 'El Hobbit',
    author: 'J. R. R. Tolkien',
    published: '21/09/1937',
    cover: 'https://covers.openlibrary.org/b/isbn/9780345339683-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780345339706',
    title: 'La Comunidad del Anillo',
    author: 'J. R. R. Tolkien',
    published: '29/07/1954',
    cover: 'https://covers.openlibrary.org/b/isbn/9780345339706-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780345339713',
    title: 'Las Dos Torres',
    author: 'J. R. R. Tolkien',
    published: '11/11/1954',
    cover: 'https://covers.openlibrary.org/b/isbn/9780345339713-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780345339737',
    title: 'El Retorno del Rey',
    author: 'J. R. R. Tolkien',
    published: '20/10/1955',
    cover: 'https://covers.openlibrary.org/b/isbn/9780345339737-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780439554930',
    title: 'Harry Potter y la piedra filosofal',
    author: 'J. K. Rowling',
    published: '26/06/1997',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780439064873',
    title: 'Harry Potter y la cámara secreta',
    author: 'J. K. Rowling',
    published: '02/07/1998',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780439136365',
    title: 'Harry Potter y el prisionero de Azkaban',
    author: 'J. K. Rowling',
    published: '08/07/1999',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780439139601',
    title: 'Harry Potter y el cáliz de fuego',
    author: 'J. K. Rowling',
    published: '08/07/2000',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439139601-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780439358071',
    title: 'Harry Potter y la Orden del Fénix',
    author: 'J. K. Rowling',
    published: '21/06/2003',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439358071-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780439785969',
    title: 'Harry Potter y el misterio del príncipe',
    author: 'J. K. Rowling',
    published: '16/07/2005',
    cover: 'https://covers.openlibrary.org/b/isbn/9780439785969-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780545010221',
    title: 'Harry Potter y las reliquias de la muerte',
    author: 'J. K. Rowling',
    published: '21/07/2007',
    cover: 'https://covers.openlibrary.org/b/isbn/9780545010221-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780143127741',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    published: '04/09/2014',
    cover: 'https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780062316110',
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    published: '08/09/2015',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  },
  {
    ISBN: '9780525559474',
    title: 'Hábitos Atómicos',
    author: 'James Clear',
    published: '16/10/2018',
    cover: 'https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg',
    status: 'Leído',
    isFavorite: false
  },
  {
    ISBN: '9780062457714',
    title: 'El poder de los hábitos',
    author: 'Charles Duhigg',
    published: '28/02/2012',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg',
    status: 'Pendiente',
    isFavorite: false
  }
  ];

  return (
    <>
    <div className = "min-h-screen">
      <Header />
      <Library books={books} />
    </div>
    </>
  )
}

export default App
