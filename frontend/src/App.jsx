import React, {
  createContext,
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Security } from "./Authentication/context";
import Croutes from "./routes/Crouters";
import axios from "axios";
import { getCookie, setCookie } from ".";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import loadingImg from "./assets/loading.gif";
function App() {
  const [loading, setLoading] = useState(false);

 useEffect(()=>{
  
 },[])
  const [auth, setAuth] = useState({
    email: "",
    username: "",
    token: "",
    authunticated: false,
  });
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return (
    <div className="App">
      <Security.Provider value={[auth, setAuth]}>
        <Header />
        <div className="container">
          {loading === true ? (
            <div
              className="d-flex justify-content-center loading-icon fadeOut"
              id="loading"
            >
              <img
                className="d-block"
                width="100px"
                height="100px"
                src={loadingImg}
              />
            </div>
          ) : (
            <Croutes />
          )}
        </div>
      </Security.Provider>
    </div>
  );
}

export default memo(App);
