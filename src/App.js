import Hero from "./components/Hero";
import Qualification from "./components/Qualification";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Nav from "./components/Navigations";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Qualification />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
