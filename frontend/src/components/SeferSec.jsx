import React from "react";
import { Link, useLocation } from "react-router-dom";
import SeferCard from "./SeferCard";

function SeferSec() {
  const location = useLocation();
  console.log(location.state);
  let seyahatlar = location.state.seyahatlar;
  return (
    <div >
      <div className="mb-3 p-0">
        <Link to={'../'} style={{ width: "161px" }} className="btn btn-danger">
          geri gel
        </Link>
      </div>
   
        {
            seyahatlar.map(e=> <div className="container mt-3"><SeferCard detaylar={e}/></div>)
        }
     
    
    </div>
  );
}

export default SeferSec;
