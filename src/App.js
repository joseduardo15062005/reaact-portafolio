import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import Portafolio from "./components/Portafolio";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <ContactMe />
        <About />
        <Portafolio />
      </main>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
