import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PoemList from "./components/PoemList";
import PoetList from "./components/PoetList";

// when my component shld be mounted with the dom 
// API
const base = 'https://poetrydb.org';



function App() {
  // state to note the render
  const [randomPoems, setRandomPoems] = useState({});
  const [ isPending, setIsPending ] = useState(false);
  
  
  useEffect(() => {
    axios.get(`${base}/random/1`)
         .then((data) => {
            if(data.status !== 200 ) throw new Error(`Error status: ${data.status}`);

            setRandomPoems(data.data);
         }).catch((err) => alert(err))
  }, [isPending])

  

  return (
    <div className="bg-light p-0">
      <section className="container-fluid bg-dark-light p-0">
        <Header />
        <Hero  todayPoem={randomPoems}/>
      </section>

      <PoemList />
      <PoetList />
      
      <Footer />
    </div>
  );
}

export default App;
