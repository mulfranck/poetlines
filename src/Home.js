import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const url = 'http://localhost:8000/blogs';

  const { data: blogs, isPending, error } = useFetch(url);
  
  
  return (
    <div className="home">
      {error && <div className="loading"><strong>{error}</strong></div>}
      {isPending && <div className="loading"><strong>Loading...</strong></div>}
      {blogs && <Bloglist blogs={blogs} title={"All blogs"} />}
    </div>
  )
}

export default Home;