import Bloglist from "./Bloglist";

const { useState } = require("react")

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "Wsl crash on purge zsh", body:"", author:"mulfranck", id:1},
    {title: 'How to safely uninstall "Oh my zsh"', body:"", author:"mulfranck", id:2},
    {title: "The direction toward ubuntu in windows", body:"", author:"Nigga Joe", id:3}
  ])
  
  
  return (
    <div className="home">
      <Bloglist blogs={blogs} />
    </div>
  )
}

export default Home;