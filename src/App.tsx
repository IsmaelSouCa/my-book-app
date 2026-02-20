import './App.css'
import './components/Header.tsx'
import Header from './components/Header'
import Library from './pages/Library'

function App() {

  return (
    <>
    <div className = "p-4 m-10">
      <Header />
      <Library />
    </div>
    </>
  )
}

export default App
