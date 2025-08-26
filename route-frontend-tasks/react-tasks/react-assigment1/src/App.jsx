import './App.css'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Home from './Pages/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Portfolio from './Pages/Portfolio/Portfolio.jsx'
import {Routes , Route }from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />


    </>
  )
}

export default App
