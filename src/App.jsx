import {useState} from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx"
import MyProjects from "./Components/MyProjects/MyProjects.jsx";
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>

        </>
    )
}

export default App
