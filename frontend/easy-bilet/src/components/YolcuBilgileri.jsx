import React from 'react'

function YolcuBilgileri() {
  return (
    <div className="border mt-3 rounded p-4 pb-5">
      <div>
        <h4>IletisimBilgileri</h4>
      </div>
      <div className="row">
        <div className="col-12 px-2">
        <label for="exampleFormControlInput2" class="form-label p-0">
           Adı
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
           Soyadı
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
            Tc
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
  )
}

export default YolcuBilgileri