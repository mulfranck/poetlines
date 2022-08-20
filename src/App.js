import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PoemList from "./components/PoemList";
import PoetList from "./components/PoetList";

function App() {
  return (
    <div className="bg-light p-0">
      <section className="container-fluid bg-dark-light p-0">
        <Header />
        <Hero  />
      </section>

      <PoemList />
      <PoetList />
      
      <Footer />
    </div>
  );
}

export default App;
