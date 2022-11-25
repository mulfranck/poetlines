import { Link } from 'react-router-dom';
import PoemCard from './PoemCard';
import './PoemList.css'


// List the a given noba of random poems.
const PoemList = ({poemList : poems, nobaOfMore}) => {
  return (
    <section className=" bg-dark bg-opacity-10" id="poem-list-container">
      <div className="just-for-space d-none d-md-block py-4"></div>
      <header className="text-serif fs-1 fst-italic container">Poems</header>
      <div className='container'>
        <div className="card-columns">
          <header className="d-flex flex-column mt-md-4 text-bg-light align-items-bottom align-items-end">
            <p className="d-flex">
              <Link to="/poems" className='link-dark d-flex align-items-center '><span className='fs-4 text-sans para pb-2'> { nobaOfMore } Poems</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></Link>
            </p>
          </header>
          {poems.map((poem, ind) =>  {
           return  (
            <Link to={`poems/${poem.title}`} key={ind}>
              <PoemCard poem={poem} />
            </Link>
           )}
          )}
        </div>
    </div>
    <div className="just-for-space d-none d-md-block py-4"></div>
    </section>
  )
}

export default PoemList;