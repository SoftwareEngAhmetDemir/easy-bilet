import React from "react";
import { useLocation } from "react-router-dom";

function OdemeBilgileri() {
  const location = useLocation();
  const data = location.state.data
  console.log(data)
  return (
    <div className="border rounded p-4 pb-5" style={{height:'100%'}}>
      <div>
        <h4>Ödeme Bilgileri</h4>
      </div>
      <div className="row">
        <div className="col-12 px-2">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
          </label>
          <input
            type="text"
            className="form-control form-control-inp border-0"
            style={{ outline: "none" }}
            id="exampleFormControlInput2"
            placeholder="Kart Numarası"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 px-2">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
            
          </label>
          <input
            type="text"
            className="form-control form-control-inp border-0"
            style={{ outline: "none" }}
            id="exampleFormControlInput2"
            placeholder="Son Kullanma Tarihi"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 px-2">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
            
          </label>
          <input
            type="text"
            className="form-control form-control-inp border-0"
            style={{ outline: "none" }}
            id="exampleFormControlInput2"
            placeholder="CVV2"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary">Ödeme Yap</button>
      </div>
    </div>
  );
}

export default OdemeBilgileri;
