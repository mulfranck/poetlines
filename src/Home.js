import { useEffect, useState} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const url = 'http://localhost:8000/blogs';
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => (blog.id !== id));
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          setIsPending(false);
          throw Error(`Could not fetch data from ${url}`);
        }
        return resp.json();
      }).then(data => {
        setBlogs(data);
        setIsPending(false);
      }).catch(e => {
        setError(e.message)
      })
  }, [])
  
  return (
    <div className="home">
      {error && <div className="loading"><strong>{error}</strong></div>}
      {isPending && <div className="loading"><strong>Loading...</strong></div>}
      {blogs && <Bloglist blogs={blogs} title={"All blogs"} handleDelete={handleDelete}/>}
    </div>
  )
}

export default Home;