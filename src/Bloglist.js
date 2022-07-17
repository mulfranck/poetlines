
const Bloglist = (props) => {
  const handlecant = () => {
    alert("Sorry! Can't delete this.");
  }

  return (
    <div className="b-list">
      <h1 className="pg-title">{props.title}</h1>
      {  
        props.blogs.map(blog => (
          <div className="b-preview" key={blog.id}>
            <h2 className="b-title">{blog.title}</h2>
            <p className="b-details">Written by <span className="b-author">{blog.author}</span></p>
            <div className="b-foote">
              <button className="edit">Edit</button>
              <button className="delete" onClick={() => (Object.hasOwn(props, 'handleDelete') ? props.handleDelete(blog.id) : handlecant())}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Bloglist;