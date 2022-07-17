import { useEffect, useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          setIsPending(false);
          throw Error(`Could not fetch data from ${url}`);
        }
        return resp.json();
      }).then(data => {
        setData(data);
        setIsPending(false);
      }).catch(e => {
        setError(e.message)
      })
  }, [url]) // run this fctn if the url changes


  return { data, isPending, error }
}

export default useFetch;