import React from "react";
import IletisimBilgileri from "./IletisimBilgileri";
import OdemeBilgileri from "./OdemeBilgileri";
import SeferBilgileri from "./SeferBilgileri";
import YolcuBilgileri from "./YolcuBilgileri";

function Odeme() {
  return (
    <div className="row">
      <div className="col-lg-4 col-12">
        <SeferBilgileri />
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
