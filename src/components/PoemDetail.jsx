import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { CreatePoemLines } from "../utils/CreatePoemLines";
import PoemCard from "./PoemCard";


import './poemDetail.css';

export default function Poem(props){
  const { title } = useParams();
  const [ poem, setPoem ] = useState({});
  const [ authorPoems, setAuthorPoems ] = useState([]);

  useEffect(() => {
    axios.get(`${props.baseUrl}/title/${title}`).then((peom) => {
      const { author, lines, title } = peom.data[0];

      document.title = title;

      setPoem({
        author,
        lines,
        title
      })

      return () => {
        document.title = 'Poetlines | Great poet, profound philosopher';
      }
    })
  }, [])


  useEffect(() => {
    poem &&
      axios.get(`${props.baseUrl}/author,random/${poem.author};3.json`)
      .then(({ data }) => {
        setAuthorPoems([...data])
      }).catch(err => {
        console.log('error: ', err);
      })
    }, [poem]);

  return (
    <section className="container">
        <div className="row my-md-4">
          <div className="col-md-6 offset-md-2 shadow card py-3 px-4">
            <header className="poem-head">
              <h3 className="h3">{ title }</h3>
              <h5 className="h5 pb-3 pt-2">{Object.keys(poem).length === 0 ? "" : <Link to={`poets/${poem.author}`}>{poem.author}</Link>}</h5>
            </header>
            <article className="text-20">
              {
                Object.keys(poem).length === 0 ? <div className="spinner-grow text-dark" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div> :
                        <CreatePoemLines lines={poem?.lines} />
              }
            </article>
          </div>
          <div className="col-md-4 same-height d-flex flex-column">
              {
                authorPoems.map((ap, index) => <PoemCard key={index} poem={ap} /> )
              }
          </div>
        </div>
    </section>
  )

}