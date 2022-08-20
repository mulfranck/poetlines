const Poet = (props) => {
  const { poet, readAboutPoet } = props.poet;
  return (
    <article className="card w-25 m-4 border-rounded-0 text-dark p-1 pb-2">
      <div className="card-img-top lorem-img w-100 m-0"></div>
      <div className="card-body text-light position-absolute bottom-0 end-0 text-end">
        <h3 className="card-title">{poet}</h3>
        <a className="link-light" href={readAboutPoet}>read about poet</a>
      </div>
    </article>
  )
}

const PoetList = (props) => {

  return (
    <section className="m-0 text-bg-primary bg-opacity-75" id="poet-list">
      <div className="just-space-above py-4"></div>

      <header className="container  text-opacity-100" >
        <div className=" d-flex justify-content-evenly">
          <h3 className="h3 text-serif fs-1 fst-italic container ms-auto">Poets</h3>
          <p className="">
            <a href="/peots" className='link-dark d-flex align-items-center'><span className="fs-4 text-sans para pb-2">Noba&nbsp;of&nbsp;poets</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></a>
          </p>
        </div>
      </header>
      <section className="container">
        <div className="row d-flex flex-wrap ms-5">
            <Poet poet={{poet: 'Niggious', readAboutPoet: 'httplink'}} />
            <Poet poet={{poet: 'Vista logga', readAboutPoet: 'httplink'}} />
            <Poet poet={{poet: 'Niggious', readAboutPoet: 'httplink'}} />
            <Poet poet={{poet: 'Vista logga', readAboutPoet: 'httplink'}} />
            <Poet poet={{poet: 'Niggious', readAboutPoet: 'httplink'}} />
        </div>
      </section>
    </section>
  )
}

export default PoetList;