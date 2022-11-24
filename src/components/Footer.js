const Footer = props => {

  return (
    <section className="text-dark bg-dark-100 container-fluid">
      <footer className="">
        <div className="just-some-space py-4"></div>
        <section className="container">

        <section className="row" id="contact">
          <article className="col-md-5 offset-md-1">
            <header className="d-flex">
              <h3 className="h3 fst-italic border-bottom pb-2 w-75">
                Our Newsletters
              </h3>
            </header>
            <form className="main">
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="teach-id" required aria-required/>
                  <label className="form-check-label font-sans opacity-75" htmlFor="teach-it">
                    Teach This Poem
                  </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" value="" id="daily-poem" required aria-required/>
                  <label className="form-check-label font-sans opacity-75" htmlFor="daily-poem">
                    Daily Poem
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="audio-poem" required aria-required/>
                  <label className="form-check-label font-sans opacity-75" htmlFor="audio-poem">
                    Audio Poem
                  </label>
              </div>
              <div className="input-group w-75 h-25 mt-3">
                <input type="email" className="form-control" placeholder="user@email.com" aria-label="Your email" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">submit</button>
              </div>
            </form>
          </article>
          <article className="col-md-5">
            <header className="d-flex justify-content-end">
              <h3 className="h3 fst-italic border-bottom pb-2 w-75 text-end">
                Support Us
              </h3>
            </header>
            <nav className="nav flex-column align-content-end text-sans text-end mb-3">
              <a className="nav-link active"href="/member">Become a Member</a>
              <a className="nav-link" href="/invelved">Get Involved</a>
            </nav>
            <div className="social d-flex fs-4 justify-content-end me-3">
              <span className="bi bi-youtube"></span>
              <span className="bi bi-twitter mx-3 "></span>
              <span className="bi bi-telegram"></span>
              <span className="bi bi-facebook mx-3"></span>
              <span className="bi bi-slack"></span>
            </div>
          </article>
        </section>
        </section>
        <div className="just-some-space py-4"></div>
        <section className="container-fluid p-0">

        <section className="row text-bg-dark" id="footer">
          <section className="container px-5">
            <div className="row justify-content-between">

          <div className="col py-4 text-sans">
            <p>The beautify of Poem</p>
          </div>
          <div className="col text-end py-4">
              <a className="link-light text-decoration-none text-sans" href="https://github.com/mulfranck/poetlines">GitHub <span className="bi bi-github fs-5 ms-2 text-light"></span></a>
          </div>
            </div>
          </section>
        </section>
        </section>
      </footer>
    </section>
  )
}

export default Footer;