import { CreateArrayNode } from '../utils/CreateArrayNode';
import './Hero.css';

const Hero = (props) => {
  const { title, lines, author } = (props.todayPoem[0])

  return (
    <section className="container">
      <div className='row py-4 d-none d-md-block'></div>

      <article className="row d-flex flex-wrap flex-md-nowrap">
        <aside className="col-md-4 col-sm-12 pe-0">
          <h3 className="h3 p-3 d-none d-md-flex flex-row-reverse text-light">{author}</h3>
          <div className="d-none d-md-flex">
            <div className="lorem-img w-100"></div>
          </div>
          <div className="mt-md-5 mb-md-4">
            <div className="bg-dark p-4">
              <div className="social d-flex gap-2 text-primary">
                <span className="bi bi-facebook fs-3"> </span>
                <span className="bi bi-twitter fs-3"></span>
                <span className="bi bi-github fs-3"></span>
                <span className="bi bi-search fs-3"></span>
              </div>

              <div className="call-to-action-text mt-md-4 ">
                <p className=' text-light mb-0'>Sign up for daily poem</p>

                <p className='mb-md-0 text-light para text-serif'>recieve a poem in your email directly</p>
              </div>

              <div className="container ps-0 mt-md-3">
                <form className="input-group">
                  <input className="form-control" type="email" placeholder="user@email.com" aria-label="Search" />
                  <button className="btn btn-outline-primary text-light" type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </aside>

        <div className="col-md-8 col-sm-12 text-bg-light today-poem">
          <div className='just-for-space row py-4'></div>

          <div className="row full-page">
            <div className="col d-flex position-relative">
              <p className='text-light fs-5 py-3 px-4 position-absolute today-tag'>Poem today</p>
            </div>

            <article className="col-md-8 h-100 d-flex flex-column justify-content-between">
              <h2 className="h3 mt-3"> {title} </h2>
              <main className="col position-relative overflow-hidden">
                <div className='para fs-5 text-serif mt-4'>
                  <CreateArrayNode lines={lines}/>
                  <div className="faded-text position-absolute end-0 start-0 bottom-0 w-100 h-50"></div>
                </div>
              </main>
              <footer>
                <button className='btn text-light read-more'>read poem</button>
              </footer>
            </article>
            <article className="col-1"></article>
          </div>
        </div>
      </article>
    </section>
  )
}


export default Hero;