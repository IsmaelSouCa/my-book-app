import './App.css'
import './components/Header.tsx'
import Header from './components/Header'
import Library from './pages/Library'

function App() {

  return (
    <>
    <div className = "min-h-screen">
      <Header />
      <Library />
    </div>
    </>
  )
}

export default App
