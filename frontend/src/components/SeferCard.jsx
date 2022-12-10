import React from "react";
import { Link } from "react-router-dom";

function SeferCard() {
  return (
    <div className="row justify-content-center border p-3 rounded align-items-center">
      <div className="col-3">otobüs Firması</div>
      <div className="col-3">kalkış Saati</div>
      <div className="col-3">Ücret</div>
      <div className="col-3 d-flex justify-content-center">
        <Link className="btn btn-primary" to={"koltuksec"}>
          {" "}
          Koltuk Seç
        </Link>
      </div>
    </div>
  );
}

export default SeferCard;
