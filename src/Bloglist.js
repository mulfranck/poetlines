
const Bloglist = (props) => {
    return (
        props.blogs.map(blog => (
            <div className="b-preview" key={blog.id}>
              <h2 className="b-title">{blog.title}</h2>
              <p className="b-details">Written by <span className="b-author">{blog.author}</span></p>
            </div>
          ))
    )
}

export default Bloglist;