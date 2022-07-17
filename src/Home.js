import Bloglist from "./Bloglist";

const { useState } = require("react")

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "Wsl crash on purge zsh", body:"", author:"mulfranck", id:1},
    {title: "The direction toward ubuntu in windows", body:"", author:"Nigga Joe", id:2},
    {title: 'How to safely uninstall "Oh my zsh"', body:"", author:"mulfranck", id:3},
  ])
  
  
  return (
    <div className="home">
      <Bloglist blogs={blogs} title={"All blogs"}/>
      <Bloglist blogs={blogs.filter(blog => blog.author === 'mulfranck')} title={"@mulfranck's blogs"}/>
    </div>
  )
}

export default Home;