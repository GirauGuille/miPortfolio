import Navbar from "./components/navbar.jsx"
import Intro from "./components/intro.jsx"
import About from "./components/about.jsx"
import Portfolio from "./components/portfolio.jsx"
import Contact from "./components/contact.jsx"
import Proyectos from "./components/projects.jsx"
import './App.scss'
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/i18n.js';

function App() {

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Proyectos />
        <Contact />
      </I18nextProvider>
    </>
  )
}

export default App
