import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Security } from "../Authentication/context";
import SeyahatlarinCard from "./SeyahatlarinCard";
import axios from "axios";
import useApi from "../hooks/useApi";
function Seyahatlarim() {
  const [auth, setAuth] = useContext(Security);
  const [results] = useApi("/seyahatlarim", { email: auth.email });
  console.log(results);
  // console.log(results)
  return (
    <div>
      <div className="mb-3">
        <h2>Seyahatlarim</h2>
      </div>

     {results? <div>
        <div className="mb-3 p-0">
          <Link
            to={"../"}
            style={{ width: "161px" }}
            className="btn btn-danger"
          >
            geri gel
          </Link>
        </div>

        {results.map((e,index) => (
          <div key={index} className="container mt-3">
            <SeyahatlarinCard data={e}/>
          </div>
        ))}
      </div>
:<div>Loading</div>}
    </div>
  );
}

export default Seyahatlarim;
