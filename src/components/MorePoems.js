import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MorePoems = ({baseUrl}) => {
  const [tenPoems, setTenPoems] = useState([]);

  
  useEffect(() => {
    axios.get(`${baseUrl}/random/10`)
         .then(resData => {
            if (resData.status !== 200 ) throw Error(resData.status);
            else {
              setTenPoems(resData.data);
            }
         })
         .catch(err => alert("Error of ", err))
  }, [baseUrl])



  return (
    <div className="container">
                <div className="row bg-opacity-25 bg-primary py-3">
                  <div className="col-md">
                    <h5 className="fst-italic fw-light">Title</h5>
                  </div>
                  <div className="col-md-3">
                    <h5 className="fst-italic fw-light">Author</h5>
                  </div>
                </div>
              {
                tenPoems.map((aPoem, index) => (
                  <div key={index} className="row py-3" >
                    <div className="col-md">
                    <Link to={`${aPoem.title}`}>
                      {aPoem.title}
                    </Link>
                    </div>
                    <div className="col-md-3">
                      <Link to={`poet/${aPoem.author}`}>
                        {aPoem.author}
                      </Link>
                    </div>
                  </div>
                ))
              }
    </div>
  )
}

export default MorePoems;