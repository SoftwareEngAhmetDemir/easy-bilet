import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8090";

export function setCookie(cName, cValue, expHours) {
  let date = new Date();
  date.setTime(date.getTime() + expHours * 60*60 * 1000); // 1 hour
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 axios.interceptors.response.use(
  function (response) {
    let token = getCookie("token");
    if (response.headers.token !== undefined) {
      axios.defaults.headers.common["token"] = response.headers.token;
      setCookie("token", response.headers.token, 1);
    }
    if ((response.url !== "/login" || response.url !== "/Member") && token.length === 0) {
      response.headers.token = token;
    }
    if (response.data.msg === 401) {
      window.location.href = "/login";
    }
// response.headers.toki = "ahmed"
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.request.use((req) => {
  console.log(req.url);
  let token = getCookie("token");
if(token.length>0){
  axios.defaults.headers.common["token"] = token;
}

  if ((req.url !== "/login" || req.url !== "/Member") && token.length === 0) {
    req.headers.token = token;
  }
  if (req.data.msg === 401) {
    window.location.href = "/login";
  }
  return req;
});

let rootE = document.getElementById("root");
const root = ReactDOM.createRoot(rootE);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    
   
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
