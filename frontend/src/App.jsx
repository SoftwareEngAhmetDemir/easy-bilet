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
import { Timers } from "./Authentication/timers";
function App() {
  const [loading, setLoading] = useState(false);
  function getMinutesDiff(startDate, endDate) {
    const msInMinutes = 60* 1000;

    return Math.floor((endDate - startDate) / msInMinutes);
  }
  const logout = () => {
    console.log("logout");
    window.location.href = "/login";
    setCookie("token", "", 0);
    sessionStorage.removeItem("loginTime");
  };
  axios.interceptors.response.use(
    function (response) {
      let token = getCookie("token");
      if (response.headers.token !== undefined) {
        axios.defaults.headers.common["token"] = response.headers.token;
        setCookie("token", response.headers.token, 1);
      }
      if (
        (response.url !== "/login" || response.url !== "/Member") &&
        token.length === 0
      ) {
        response.headers.token = token;
      }
      if (response.data.msg === 401) {
        window.location.href = "/login";
      }

      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.request.use((req) => {
    let token = getCookie("token");
    if (token.length > 0) {
      axios.defaults.headers.common["token"] = token;
      if (
        sessionStorage.getItem("loginTime") === null &&
        (req.url !== "/login" || req.url !== "/Member")
      )
        sessionStorage.setItem("loginTime", new Date());
      let LoginTime = new Date(sessionStorage.getItem("loginTime").toString());
      let currentTime = new Date();
      let diffM = getMinutesDiff(LoginTime, currentTime);
      console.log(diffM);
      if (diffM >= 54) {
        
        document.addEventListener("click", function () {
          let { username, email } = auth;
      
          sessionStorage.setItem("loginTime", new Date());

          fetch("http://localhost:8090/refreshToken", {
            method: "POST",
            body: JSON.stringify({
              ad: username,
              email: email,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              token: axios.defaults.headers.common["token"],
            },
          })
            .then((response) => response.json())
            .then((e) => {
              setCookie("token", e.msg, 1);
              req.headers.token = e.msg;
              axios.defaults.headers.common["token"] = e.msg;
            });
        });
      } else if (diffM > 59) {
        if (req.url !== "/login" || req.url !== "/Member") {
          logout();
        }
      }
    }

    //
    // console.log(LoginTime);
    // if (diffM <= 61) {
    //   document.addEventListener("click", function () {
    //     sessionStorage.setItem("loginTime", new Date());
    //     axios.post("/refreshToken").then((data) => {
    //       axios.defaults.headers.common["token"] = req.headers.token;
    //       setCookie("token", req.headers.token, 1);
    //     });
    //   });
    // }
    // else if (diffM > 61) {
    //   logout();
    // }
    // console.log(currentTime);
    if ((req.url !== "/login" || req.url !== "/Member") && token.length === 0) {
      req.headers.token = token;
    }
    if (req.data?.msg === 401) {
      window.location.href = "/login";
    }
    return req;
  });

  useEffect(() => {}, []);
  const [auth, setAuth] = useState({
    email: "",
    username: "",
    token: "",
    authunticated: false,
  });
  const [loginTime, SetLoginTime] = useState(null);
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
            <Timers.Provider value={[loginTime, SetLoginTime]}>
              <Croutes />
            </Timers.Provider>
          )}
        </div>
      </Security.Provider>
    </div>
  );
}

export default App;
