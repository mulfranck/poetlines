const PoemCard = (props) => {

  const { title, lines, author } = (props.poem);

  const poemLines = lines.map((line) => {
    // To random the whitespaces for the html poemline
    // let rand = Math.floor(Math.random()*10); 
    // rand = rand <= 3 ? rand : Math.abs(rand - 7);
    // let spacing = ''.repeat(rand);
    // const newLine = spacing + line;
    return (
      <span className="line">{line}</span>
    )
  })
  return (
    <article className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 my-4">
          <h5 className="card-title">{title}</h5>
          <div className="card-body mx-1 position-relative">

            <p className="card-text text-20 para">
              {poemLines}
            </p>
            <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
          </div>
          <div className="footer d-flex flex-column align-items-start">
            <p className="author fw-bold opacity-75">{author}</p>
          </div>
        </article>
  )
}

export default PoemCard;