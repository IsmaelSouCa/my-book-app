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
      cover: 'src/assets/cuarto_mono_cover.jpg',
      status: 'Pendiente',
      isFavorite: false
    },
    {
      ISBN: '',
      title: 'La Chica de Nieve',
      author: 'Javier Castillo',
      published: '12/03/2020',
      cover: 'src/assets/chica_de_nieve_cover.jpg',
      status: 'Pendiente',
      isFavorite: false
    },
    {
      ISBN: '',
      title: 'La Asistenta',
      author: 'Freida McFadden',
      published: '05/10/2023',
      cover: 'src/assets/la_asistenta_cover.jpg',
      status: 'Leído',
      isFavorite: false
    },
    {
      ISBN: '',
      title: 'Así es la puta vida',
      author: 'Jordi Wild',
      published: '03/11/2022',
      cover: 'src/assets/aelpv_cover.jpg',
      status: 'Leído',
      isFavorite: true
    },
    {
      ISBN: '',
      title: 'Los secretos de YouTube',
      author: 'TheGrefg',
      published: '27/11/2018',
      cover: 'src/assets/lsdy_cover.jpg',
      status: 'Pendiente',
      isFavorite: true
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
