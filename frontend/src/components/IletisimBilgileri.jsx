import React from "react";
import { Controller } from "react-hook-form";
import EeasyBiletInput from "./EeasyBiletInput";

function IletisimBilgileri({ control }) {
  return (
    <div className="mt-lg-0 mt-3 border rounded p-4 pb-5">
      <div>
        <h4>IletisimBilgileri</h4>
      </div>
      <div className="row">
        <div className="col-12 px-2">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
            E-posta
          </label>
          <EeasyBiletInput
            control={control}
            name={"email"}
            placeholder="email"
          />
        </div>
        <div className="col-12 pt-2 px-2">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
            Cep Tel
          </label>
          <EeasyBiletInput control={control} name={"cep"} placeholder="cep" />
        </div>
      </div>
    </div>
  );
}

export default IletisimBilgileri;
