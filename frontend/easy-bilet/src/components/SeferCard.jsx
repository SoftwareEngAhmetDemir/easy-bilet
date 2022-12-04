import React from "react";

function SeferCard() {
  return (
    <div className="row justify-content-center border p-3 rounded align-items-center">
      <div className="col-3">otobüs Firması</div>
      <div className="col-3">kalkış Saati</div>
      <div className="col-3">Ücret</div>
      <div className="col-3 d-flex justify-content-center">
        <button className="btn btn-primary">Koltuk Seç</button>
      </div>
    </div>
  );
}

export default SeferCard;
