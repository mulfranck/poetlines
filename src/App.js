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
  const [todaysPoem, setTodaysPoem] = useState([{title:'', lines:[], author:''}]);
  const [poemList, setPoemList] = useState([{title:'', lines:[], author:''}]);
  // const today = new Date().getDay(); // get the day index of today
  
  useEffect(() => {
    let todaysList = JSON.parse(localStorage.getItem('pl_list'));
    let todaysPoem = JSON.parse(localStorage.getItem('pl_poem'));
    // let todayInd = JSON.parse(localStorage.getItem('pl_today'));

   
    
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

          console.log('Here I am niga')

        }).catch((err) => alert(err))
    }

    if (todaysPoem && todaysList) {
      console.log('Setting states')
      setTodaysPoem(todaysPoem)
      setPoemList(todaysList)
  }
  }, [])

  
// 
  return (
    <div className="bg-light p-0">
      <section className="container-fluid bg-dark-light p-0">
        <Header />
        <Hero  todayPoem={todaysPoem}/>
      </section>

      <PoemList poemList={poemList}/>

      <PoetList />
      
      <Footer />
    </div>
  );
}

export default App;
