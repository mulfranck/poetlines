import './Hero.css';

const Hero = (e) => {
  return (
    <section className="container-fluid hero-full">
      <article className="row h-100">
        <div className="col-md-4 today-poet">
          <div className="lorem-img"></div>
        </div>
        <div className="col-md-8 text-bg-light today-poem ">
          <article className="container h-75">
            <div className="row mt-4 h-100">
              <div className="col-md-2 position-relative">
                <p className='px-1 py-2 position-absolute w-100  today-tag' > Poem of the Day</p>
              </div>
              <div className="col">
                <h2 className="h3"> Title </h2>
                <main className='lead h-100'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatum? Maiores odit illum, repellendus asperiores ducimus alias!
                </main>
                <footer>
                  <button className='btn text-light read-more'>read the whole poem</button>
                </footer>
              </div>
              <div className="col-md-2"></div>
            </div>
          </article>
        </div>
      </article>
    </section>
  )
}


export default Hero;