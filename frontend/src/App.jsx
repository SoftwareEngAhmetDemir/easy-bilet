import React, { createContext, useEffect, useState } from "react";
import { Security } from "./Authentication/context";
import Croutes from "./routes/Crouters";
import axios from "axios";
import { getCookie } from ".";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
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
//   useEffect(() => {
//     console.log("alo");
//     let token = getCookie("token");
//     if (token.length < 0) return;
// // if(window.location.pathname!=="/login") return;
//     axios
//       .post(
//         "/decode",
//         {
//           token: token,
//         },
//         {}
//       )
//       .then(({ data }) => {
//         let { msg, decoded } = data;
//         if (msg === 200) {
//           setAuth({
//             email: decoded.email,
//             username: decoded.ad,
//             token: token,
//             authunticated: true,
//           });
//          console.log(window.location.pathname)
//             // 
//             navigate("/biletal");
          
//         }
//       });
//       return () => {
//         console.log('finished first')
//       };
//   }, []);
  return (
    <div className="App">
      <Security.Provider value={[auth, setAuth]}>
      <Header />
      <div className="container">
        <Croutes />
        </div>
      </Security.Provider>
    </div>
  );
}

export default App;
