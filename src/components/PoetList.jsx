const PoetList = (props) => {

  return (
    <section className="m-0 text-bg-primary" id="poet-list">
      <div className="just-space-above py-4"></div>

      <header className="d-flex justify-content-between">
     
        <h3 className="h3 text-serif fs-1 fst-italic container">Poets</h3>
        <p className="d-flex">
              <a href="/peots" className='link-dark d-flex align-items-center fs-3 text-medium text-sans para'><span> Noba of poets</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></a>
            </p>
      </header>
    </section>
  )
}

export default PoetList;