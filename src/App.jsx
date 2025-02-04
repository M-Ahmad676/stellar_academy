import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
