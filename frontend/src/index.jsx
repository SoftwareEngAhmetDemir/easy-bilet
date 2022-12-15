import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8090';
axios.interceptors.response.use(
  function (response) {
    if(response.headers.token!==undefined)
    axios.defaults.headers.common['token'] = response.headers.token;
    
    console.log(axios.defaults.headers.common['token'])
    return response;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(req => {
  axios.defaults.headers.common['token'] = req.headers.token;
  console.log(req.headers);
  return req;
  })
// axios.defaults.withCredentials = true
 let rootE = document.getElementById("root") ;
const root = ReactDOM.createRoot(rootE);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
