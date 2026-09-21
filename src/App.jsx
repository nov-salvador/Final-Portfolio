import About from "./components/about/About";
import Certificates from "./components/certificates/Certificate";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Scroll from "./components/scroll/Scroll";
import Skills from "./components/skills/Skills";

function App() {
  return (<>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </main>
    <Footer/>
    <Scroll/>
  </>);
}

export default App;
