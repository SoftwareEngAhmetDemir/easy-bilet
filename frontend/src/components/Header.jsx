import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { setCookie } from "..";
import { Security } from "../Authentication/context";

function Header() {
  const [auth,setAuth]  = useContext(Security);
  const logout=()=>{
    console.log("logout")
    setCookie("token","",0);
  }
  return (
    <header id="header">
      <div className=" head-1">
       <div className="d-flex justify-content-sm-between justify-content-center h-100 container flex-wrap">
        <h1>EasyBilet.com</h1>
        <ul className="d-flex h-100 list-unstyled bread-crumb align-items-center">
          <li>
           {!auth.authunticated? <NavLink to={"login"}>Üye Giriş</NavLink>:<NavLink to={"/login"} onClick={logout}>Çıkış yap</NavLink>}
          </li>
          <li>
            <NavLink to={"seyahatlarim"}>Seyahatlarım</NavLink>
          </li>
        </ul>
      </div>
      </div>
      <nav className="color-dark head-2">
        <ul className="container list-unstyled py-4">
          <li>
            <NavLink to={"biletal"} className="d-inline-block">
              <h4>
              Otobüs
              </h4>
            </NavLink>
          </li>
          {/* <li>Uçak</li> */}
        </ul>
      </nav>
      <br />
    </header>
  );
}

export default Header;
