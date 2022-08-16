import Header from "./components/Header";
import Hero from "./components/Hero";
import PoemList from "./components/PoemList";

function App() {
  return (
    <div className="bg-light p-0">
      <section className="container-fluid bg-dark-light p-0">
        <Header />
        <Hero  />
      </section>

      <PoemList />

      <section className="container">
        <div className="row py-5"></div>
      </section>
      <section className="container">

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sit cumque ipsam obcaecati earum labore iusto voluptatem deserunt veritatis dolore nobis non magnam molestias esse? Voluptate quas a itaque ratione?
      </section>
      <section className="container">
        <div className="row py-5"></div>
      </section>
      <section className="container"></section>
      <section className="container">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sit cumque ipsam obcaecati earum labore iusto voluptatem deserunt veritatis dolore nobis non magnam molestias esse? Voluptate quas a itaque ratione?
      </section>
      <section className="container">
        <div className="row py-5"></div>
      </section>
      <section className="container"></section>
    </div>
  );
}

export default App;
