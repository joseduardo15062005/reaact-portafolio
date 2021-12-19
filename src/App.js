import { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import Portafolio from "./components/Portafolio";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  return (
    <>
      <header>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <main>
        {currentPage === "About Me" && <About />}
        {currentPage === "Portafolio" && <Portafolio />}
        {currentPage === "Contact Me" && <ContactMe />}
      </main>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
