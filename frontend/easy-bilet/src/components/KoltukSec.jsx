import React from "react";
import { Link } from "react-router-dom";

function KoltukSec() {
  let dataSeats = [
    { id: 1, bos: false },
    { id: 2, bos: false },
    { id: 3, bos: false },
    { id: 4, bos: false },
    { id: 5, bos: false },
    { id: 6, bos: false },
    { id: 7, bos: false },
    { id: 8, bos: false },
    { id: 9, bos: false },
    { id: 10, bos: false },
    { id: 12, bos: false },
    { id: 13, bos: false },
    { id: 14, bos: false },
    { id: 15, bos: false },
    { id: 16, bos: false },
    { id: 17, bos: true },
    { id: 18, bos: true },
    { id: 19, bos: true },
    { id: 20, bos: true },
    { id: 21, bos: false },
    { id: 22, bos: false },
    { id: 23, bos: false },
    { id: 24, bos: false },
    { id: 25, bos: false },
    { id: 26, bos: false },
    { id: 27, bos: false },
    { id: 28, bos: false },
    { id: 29, bos: false },
    { id: 30, bos: false },
  ];
  return (
    <div className="koltukSec container">
      <div className="row border p-lg-5 p-3">
        {dataSeats.map((e) => {
          return (
            <div key={e.id} className={`col-lg-2 col-3`}>
              <img
                className={`imges ${e.bos ? "d-none" : "d-block"}`}
                src="/assets/seat.svg"
                width={"50%"}
                height="auto"
              />
            </div>
          );
        })}
      </div>
      <div className="row  w-100 justify-content-center p-3">
        <div className="col-6">
          <Link
            to={"../"}
            className="btn btn-danger w-25"
            style={{ minWidth: "161px" }}
          >
            Geri Gel
          </Link>
        </div>
        <div className="row d-md-none d-block"></div>
        <div className="col-6 mt-md-0 mt-2  d-flex justify-content-md-end">
          <Link
            to={"odeme"}
            className="btn btn-primary w-25"
            style={{ minWidth: "161px" }}
          >
            Devam Et
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KoltukSec;
