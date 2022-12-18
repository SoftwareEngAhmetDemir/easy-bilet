import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import IletisimBilgileri from "./IletisimBilgileri";
import OdemeBilgileri from "./OdemeBilgileri";
import SeferBilgileri from "./SeferBilgileri";
import YolcuBilgileri from "./YolcuBilgileri";
import axios from "axios";

function Odeme() {
  const location = useLocation();
  const Data = location.state.data;
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      ad: "",
      soyad: "",
      tc: "",
      email: "",
      cep: "",
      kartNum: "",
      sonKullanma: "",
      cvv2: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
 
    let req1 = axios.post("/odeme", data);
    let req2 = axios.post("/updateseyahatlar", {
      _id: Data._id,
      numberOfSeat: location.state.koltukNo,
    });

    axios
      .all([req1, req2])
      .then(axios.spread((...responses) => {
        let res1 = responses[0]
        let res2 = responses[1]
      }));
  };

  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-4 col-12">
        <SeferBilgileri data={Data} koltukNo={location.state.koltukNo} />
      </div>
      <div className="col-lg-4 col-12">
        <div className="col-12">
          <IletisimBilgileri control={control} />
        </div>
        <div className="col-12">
          <YolcuBilgileri control={control} />
        </div>
      </div>
      <div className="col-lg-4 col-12 mt-lg-0 mt-3">
        <OdemeBilgileri control={control} />
      </div>
    </form>
  );
}

export default Odeme;
