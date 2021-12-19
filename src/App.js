import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <About />
      </main>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
