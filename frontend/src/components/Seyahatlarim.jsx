import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Security } from "../Authentication/context";
import SeyahatlarinCard from "./SeyahatlarinCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Layout from "../Layout";
import loadingImg from "../assets/loading.gif";
function Seyahatlarim() {
  const [loading,setLoading] = useState(false);
  const [auth, setAuth] = useContext(Security);
  const [results, setResults] = useState([]);
  const [start, SetStart] = useState(0);
  const [numberOfBtns, setNumberOfBtns] = useState(0);
  let end = 5;
  const get_data =  () => {
    setLoading(true);
     axios
      .post("/seyahatlarim", { email: auth.email, start: start, end: end })
      .then(({ data }) => {
        let { records, msg, maxRecordNumbers } = data;
        let numberOfButtons = maxRecordNumbers / end;
        setNumberOfBtns(numberOfButtons);
        setResults(records);
       setTimeout(() => {
        setLoading(false);
       }, 3000);
      });
  };
  useEffect(() => {
  
    get_data();
    return ()=>{
      console.log('finished')
    }
  }, [start]);
  const handlePageClick = (event) => {
    SetStart(event.selected);
  };
  return (
    <div>
      
      <div className="mb-3">
        <h2>Seyahatlarim</h2>
      </div>

      {loading === false ? (
        <div>
          <div className="mb-3 p-0">
            <Link
              to={"/biletal"}
              style={{ width: "161px" }}
              className="btn btn-danger"
            >
              geri gel
            </Link>
          </div>
          <div
            className="border rounded p-2"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
            }}
          >
            <div
              style={{ height: "480px", overflowY: "auto", direction: "rtl" }}
              className="p-2"
            >
              <div style={{ direction: "ltr" }}>
                {results.map((e, index) => (
                  <div key={index} className="container mt-3">
                    <SeyahatlarinCard data={e} />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      ) : (
        <div>  <div
        className="d-flex justify-content-center loading-icon fadeOut"
        id="loading"
      >
        <img
          className="d-block"
          width="100px"
          height="100px"
          src={loadingImg}
        />
      </div></div>
      )}
      <div>
              <ReactPaginate
                className="mt-3"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={numberOfBtns}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
    </div>
  );
}
// Seyahatlarim = Layout(Seyahatlarim);  
export default Seyahatlarim;
