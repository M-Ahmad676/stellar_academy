import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutUs from './pages/AboutPage/AboutUs'
import Navbar from './components/Navbar'
import CopyRightBar from './components/CopyRightBar/CopyRightBar'
import ContactUs from './pages/Contact/ContactUs'
import Courses from './pages/Courses/Courses'
import Announcement from './pages/Announcement/Announcement'
import Enrollment from './pages/EnrollPage/Enrollment'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Scroll_to_top_Btn from './components/Scroll_to_Top_Btn/Scroll_to_top_Btn'

function App() {

  return (
    <>
     <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Announcement' element={<Announcement/>}/>
        <Route path='/Enrollment' element={<Enrollment/>}/>
      </Routes>
      <Footer/>
      <CopyRightBar/>
      <Scroll_to_top_Btn/>
     </Router>
    </>
  )
}

export default App
