import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
