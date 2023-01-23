import "./App.css";
import Hero from "./components/Hero/Index";
import Skills from "./components/Skills/Index";
import Services from "./components/Services/Index";
import Projects from "./components/Projects/Index";
import Contact from "./components/Contact/Index";
import Nav from "./components/Navigations/Index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
