import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../Authentication/context";
import Auth from "../components/Auth";
import BiletAl from "../components/BiletAl";
import ErrorPage from "../components/ErrorPage";
import KoltukSec from "../components/KoltukSec";
import Login from "../components/Login";
import Member from "../components/Member";
import Odeme from "../components/Odeme";
import SeferSec from "../components/SeferSec";
import Seyahatlarim from "../components/Seyahatlarim";

function Croutes() {
  const [auth,setAuth]  = useContext(AppContext);
  return (
    <Routes>
    { auth===true? 
    <>
    <Route path="/biletal">
        <Route index element={<BiletAl />}/>
        <Route path="sefersec">
          <Route index element={<SeferSec />}/>
          <Route path="koltuksec" >
            <Route index element={<KoltukSec />}/>
            <Route path="odeme" element={<Odeme/>}/>
            </Route>
          </Route>
      </Route>
      <Route path="/seyahatlarim" element={<Seyahatlarim />}></Route>
    </>
    : <Route path="*" element={<Auth />} />}
     
      <Route path="/Member" element={<Member />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Croutes;
