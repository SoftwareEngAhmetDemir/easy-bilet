import React from "react";

function IletisimBilgileri() {
  return (
    <div className="mt-lg-0 mt-3 border rounded p-4 pb-5">
      <div>
        <h4>IletisimBilgileri</h4>
      </div>
      <div className="row">
        <div className="col-12 px-2">
        <label for="exampleFormControlInput2" class="form-label p-0">
            E-posta
          </label>
          <input
            type="text"
            class="form-control form-control-inp border-0"
            style={{ outline: "none" }}
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="col-12 pt-2 px-2">
        <label for="exampleFormControlInput2" class="form-label p-0">
            Cep Tel
          </label>
          <input
            type="text"
            class="form-control form-control-inp border-0"
            style={{ outline: "none" }}
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </div>
  );
}

export default IletisimBilgileri;
