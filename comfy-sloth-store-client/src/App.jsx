import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Navbar/Sidebar'
import Footer from './components/Footer/Footer'
import { Home, About, Products } from './pages'

function App() {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
