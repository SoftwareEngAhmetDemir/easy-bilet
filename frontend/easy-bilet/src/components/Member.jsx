import React from "react";
import { Link } from "react-router-dom";

function Member() {
  return (
    <div className="uye-ol row justify-content-center">
      <div className="p-0 col-lg-5 col-8 d-flex justify-content-lg-start justify-content-center">
        <h2>Üye Ol</h2>
      </div>
      <div className="row"></div>
      <form className="row justify-content-center">
        <div class="mb-3 p-0 col-lg-5 col-8 input-c">
          <label for="exampleFormControlInput1" class="form-label">
           Ad
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ad"
          />
        </div>
        <div className="row"></div>
        <div class="mb-3 p-0 col-lg-5 col-8">
          <label for="exampleFormControlInput1" class="form-label">
            Soyad
          </label>
          <input 
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Soyad"
          />
        </div>
        <div className="row"></div>
        <div class="mb-3 p-0 col-lg-5 col-8">
          <label for="exampleFormControlInput1" class="form-label p-0">
            Email address
          </label>
          <div
            style={{ background: "#E8F0FE" }}
            className="d-flex form-control py-0 inp-c"
          >
            {/* <img width="25px" src="./assets/email.svg" />{" "} */}
            <i className="icon-email"></i>
            <input
              type="email"
              class="form-control form-control-inp border-0"
              style={{ outline: "none" }}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row"></div>
        <div class="mb-3 p-0 col-lg-5 col-8">
          <label for="exampleFormControlInput2" class="form-label p-0">
            Parola
          </label>
          <div
            style={{ background: "#E8F0FE" }}
            className="d-flex form-control py-0 inp-c"
          >
            {/* <img width="25px" src="./assets/lock.svg" /> */}
            <i className="icon-lock"></i>
            <input
              type="password"
              class="form-control form-control-inp border-0"
              style={{ outline: "none" }}
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row"></div>
        <div className="p-0 col-lg-5 col-8 d-lg-block d-flex justify-content-center">
          <button style={{ width: "161px" }} className="py-2 px-5 btn btn-primary">Kayıt Ol</button>
        </div>
      </form>
      <div className="row justify-content-center mt-4">
        <div className="p-0 col-lg-5 col-8 d-lg-block d-flex flex-column align-items-center">
          <div className="mb-3">
            <h5>Mevcut Üyeliğiniz Varsa</h5>
          </div>
          <div>
            <button
              style={{ width: "161px" }}
              className="py-2 px-5 btn btn-primary position-relative"
            >
              <Link
                to={"/login"}
                className="stretched-link color-white d-flex"
                style={{ color: "white" }}
              >
               Üye Giriş
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
