const { useState } = require("react")

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "Wsl crash on purge zsh", body:"", author:"mulfranck", id:1},
    {title: 'How to safely uninstall "Oh my zsh"', body:"", author:"mulfranck", id:2},
    {title: "The direction toward ubuntu in windows", body:"", author:"Nigga Joe", id:3}
  ])
  
  
  return (
    <div className="home">
      {
        blogs.map(blog => (
          <div className="b-preview" key={blog.id}>
            <h2 className="b-title">{blog.title}</h2>
            <p className="b-details">Written by <span className="b-author">{blog.author}</span></p>
          </div>
        ))
      }
    </div>
  )
}

export default Home;