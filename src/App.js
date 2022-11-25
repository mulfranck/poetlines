import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MorePoems from "./components/MorePoems";
import PoemDetail from "./components/PoemDetail";
import PoemList from "./components/PoemList";
import PoetList from "./components/PoetList";

// when my component shld be mounted with the dom 
// API
const base = 'https://poetrydb.org';



function App() {
  // How much poems to load on click
  let nobaOfMorePoems = Math.floor(Math.random() * (51) + 50); // random nuba between 100 and 50
  // state to note the render
  const [todaysPoem, setTodaysPoem] = useState([{title:'', lines:[], author:''}]);
  const [poemList, setPoemList] = useState([{title:'', lines:[], author:''}]);
  
  useEffect(() => {
    let todaysList = JSON.parse(localStorage.getItem('pl_list'));
    let todaysPoem = JSON.parse(localStorage.getItem('pl_poem'));

   
    
    if (!todaysList && !todaysPoem) { // if todays_list is undefined, fetch
      axios.get(`${base}/random/5`)
      .then((res) => {
        if(res.status !== 200 ) throw new Error(`Error status: ${res.status}`);
          todaysList = [...res.data] // copy the res data
          todaysPoem = todaysList.splice((Math.floor(Math.random() * 4) + 1), 1); // remove one randome poem from the list
          
          // set localstorage
          localStorage.setItem("pl_list", JSON.stringify(todaysList));
          localStorage.setItem("pl_poem", JSON.stringify(todaysPoem));
          // localStorage.setItem("pl_today", JSON.stringify(today));

          console.log('Setting states')
          setTodaysPoem(todaysPoem)
          setPoemList(todaysList)
          
        }).catch((err) => alert(err))
    }
      
    if (todaysPoem && todaysList) {
      console.log('niga state exits')
      setTodaysPoem(todaysPoem)
      setPoemList(todaysList)
    }
  }, [])

  
// 
  return (
    <div className="bg-light p-0">
      <section className="container-fluid bg-dark-light p-0">
        <Header />
      </section>

      <Routes>
        <Route path="/" element={
          <>
            <div className="container-fluid bg-dark-light p-0">
              <Hero  todayPoem={todaysPoem}/>
            </div>
            <PoemList poemList={poemList} nobaOfMore={nobaOfMorePoems} />
            <PoetList />
          </>
        } />
        <Route path="/poems/:title" element={ <PoemDetail baseUrl={base}/>} />
        <Route path="/poems" element={ <MorePoems baseUrl={base}/>} />

        <Route path="/login" element={
          <div>
            <p className="fs-2 text-center container">
              login
            </p>
          </div>
        } />

        <Route path="*" element={
          <div className="container not-found d-flex justify-content-center align-items-center">
            <div className="display-5 text-serif">
              Pages Not Found
            </div>
          </div>

        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
