
import './App.css'
import Layout from './components/Layout'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import MovieInfo from './pages/MovieInfo'
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/movie/:id" element={<MovieInfo/>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
