import './PoemList.css'

const PoemList = () => {
  return (
    <section className=" bg-dark bg-opacity-10" id="poem-list-container">
      <div className="just-for-space d-none d-md-block py-4"></div>
      <header className="text-serif fs-1 fst-italic container">Poems</header>
      <div className='container'>
      <div className="card-columns">
      <header className="d-flex flex-column mt-md-4 text-bg-light align-items-bottom align-items-end">
        <p className="d-flex">
          <a href="/peoms" className='link-dark d-flex align-items-center fs-3 text-medium text-sans para'><span> Noba of poems</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></a>
        </p>
      </header>
        <article className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 mb-4">
          <h5 className="card-title">Clling on All Silent Minorities</h5>
          <div className="card-body mx-1 position-relative">

            <p className="card-text text-20 para">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta temporibus esse nemo amet?
              Rem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod non rem aliquam voluptatem asperiores enim!
            </p>
            <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
          </div>
          <div className="footer d-flex flex-column align-items-start">
            <p className="author fw-bold opacity-75">
              Nigga Author 1
            </p>
          </div>
        </article>
        <article className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 my-4">
          <h5 className="card-title">Clling on All Silent Minorities</h5>
          <div className="card-body mx-1 position-relative">

            <p className="card-text text-20 para">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta temporibus esse nemo amet?
              Rem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod non rem aliquam voluptatem asperiores enim!
            </p>
            <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
          </div>
          <div className="footer d-flex flex-column align-items-start">
            <p className="author fw-bold opacity-75">
              Nigga Author
            </p>
          </div>
        </article>
        <article className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 my-4">
          <h5 className="card-title">Clling on All Silent Minorities</h5>
          <div className="card-body mx-1 position-relative">

            <p className="card-text text-20 para">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta temporibus esse nemo amet?
              Rem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod non rem aliquam voluptatem asperiores enim!
            </p>
            <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
          </div>
          <div className="footer d-flex flex-column align-items-start">
            <p className="fw-bold author opacity-75">Nigga Author</p>
          </div>
        </article>
        <article className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 my-4">
          <h5 className="card-title">Clling on All Silent Minorities</h5>
          <div className="card-body mx-1 position-relative">

            <p className="card-text text-20 para">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta temporibus esse nemo amet?
              Rem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod non rem aliquam voluptatem asperiores enim!
            </p>
            <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
          </div>
          <div className="footer d-flex flex-column align-items-start">
            <p className="author fw-bold opacity-75">
              Nigga Author
            </p>
          </div>
        </article>
      </div>
    </div>
    </section>
  )
}

export default PoemList;