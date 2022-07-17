import { useEffect, useState} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => (blog.id !== id))
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((resp) => resp.json())
      .then(data => setBlogs(data))
  }, [])
  
  return (
    <div className="home">
      {blogs && <Bloglist blogs={blogs} title={"All blogs"} handleDelete={handleDelete}/>}
      {blogs && <Bloglist blogs={blogs.filter(blog => blog.author === 'mulfranck')} title={"@mulfranck's blogs"}/>}
    </div>
  )
}

export default Home;