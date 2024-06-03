import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Navbar/Sidebar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
