import { CreatePoemLines } from "../utils/CreatePoemLines";

const PoemCard = (props) => {

  const { title, lines, author } = (props.poem);

  return (
    <div className="card bg-light shadow-sm border-light px-4 pt-4 pb-1 my-4">
      <h5 className="card-title">{title}</h5>
      <div className="card-body mx-1 position-relative">
        <div className="card-text text-20 para">
          <CreatePoemLines lines={lines} />
        </div>
        <div className="faded-text w-100 h-50 position-absolute bottom-0"></div>
      </div>
      <div className="footer d-flex flex-column align-items-start">
        <p className="author fw-bold opacity-75">{author}</p>
      </div>
    </div>
  );
}

export default PoemCard;