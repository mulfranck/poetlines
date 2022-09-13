import { Link } from 'react-router-dom';
import PoemCard from './PoemCard';
import './PoemList.css'

const PoemList = ({poemList : poems}) => {
  return (
    <section className=" bg-dark bg-opacity-10" id="poem-list-container">
      <div className="just-for-space d-none d-md-block py-4"></div>
      <header className="text-serif fs-1 fst-italic container">Poems</header>
      <div className='container'>
        <div className="card-columns">
          <header className="d-flex flex-column mt-md-4 text-bg-light align-items-bottom align-items-end">
            <p className="d-flex">
              <Link to="/peoms" className='link-dark d-flex align-items-center '><span className='fs-4 text-sans para pb-2'> Noba of poems</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></Link>
            </p>
          </header>
          {poems.map((poem, ind) =>  {
           return  <PoemCard key={ind} poem={poem} />
          }
          )}
        </div>
    </div>
    <div className="just-for-space d-none d-md-block py-4"></div>
    </section>
  )
}

export default PoemList;