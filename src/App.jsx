import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutUs from './pages/AboutPage/AboutUs'
import Navbar from './components/Navbar'
import CopyRightBar from './components/CopyRightBar/CopyRightBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
      <CopyRightBar/>
     </Router>
    </>
  )
}

export default App
