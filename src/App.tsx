import './App.css'
import './components/Header.tsx'
import Header from './components/Header'
import Library from './pages/Library'
import { IBook } from './types/Interfaces'

function App() {

  const books: IBook[] = [
    {
      ISBN: '',
      title: 'El Cuarto Mono',
      author: 'J. D. Barker',
      published: '27/06/2017',
      cover: 'src/assets/cuarto_mono_cover.jpg',
      status: 'Pendiente'
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
