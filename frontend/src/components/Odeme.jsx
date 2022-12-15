import React from "react";
import { useLocation } from "react-router-dom";
import IletisimBilgileri from "./IletisimBilgileri";
import OdemeBilgileri from "./OdemeBilgileri";
import SeferBilgileri from "./SeferBilgileri";
import YolcuBilgileri from "./YolcuBilgileri";

function Odeme() {
  const location = useLocation();
  const data = location.state.data
  // console.log(data)
  return (
    <div className="row">
      <div className="col-lg-4 col-12">
        <SeferBilgileri data={data} koltukNo={location.state.koltukNo}/>
      </div>
      <div className="col-lg-4 col-12">
        <div className="col-12">
          <IletisimBilgileri />
        </div>
        <div className="col-12">
          <YolcuBilgileri />
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <OdemeBilgileri />
      </div>
    </div>
  );
}

export default Odeme;
