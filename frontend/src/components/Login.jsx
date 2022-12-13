import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
function Login() {
  const { control, handleSubmit,formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      parola: "",
    },
  });

  const onSubmit = (data) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "http://localhost:8090/login",
        {
          email: data.email || "",
          parola: data.parola || "",
        },
        axiosConfig
      )
      .then((data) => {
        console.log(data.data.msg);
      })
      .catch((err) => err);
  };
  return (
    <div className="login row justify-content-center">
      <form
        className="row justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-0 col-lg-5 col-8 d-flex justify-content-lg-start justify-content-center">
          <h2>Üye Girişi</h2>
        </div>
        <div className="row"></div>
        <div className="mb-3 p-0 col-lg-5 col-8">
          <label forhtml="exampleFormControlInput1" className="form-label p-0">
            Email address
          </label>
          <div
            style={{ background: "#E8F0FE" }}
            className="d-flex form-control py-0 inp-c"
          >
            {/* <img width="25px" src="./assets/email.svg" />{" "} */}
            <i className="icon-email"></i>

            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
               validate: "email"
               }}
              render={({ field }) => (
                <input
                  {...field}
                  aria-invalid={errors.mail ? "true" : "false"} 
                  type="email"
                  className="form-control form-control-inp border-0"
                  style={{ outline: "none" }}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              )}
            />
          </div>
        </div>
        <div className="row"></div>
        <div className="mb-3 p-0 col-lg-5 col-8">
          <label forhtml="exampleFormControlInput2" className="form-label p-0">
            Parola
          </label>
          <div
            style={{ background: "#E8F0FE" }}
            className="d-flex form-control py-0 inp-c"
          >
            {/* <img width="25px" src="./assets/lock.svg" /> */}
            <i className="icon-lock"></i>

            <Controller
              name="parola"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className="form-control form-control-inp border-0"
                  style={{ outline: "none" }}
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              )}
            />
          </div>
        </div>
        <div className="row"></div>
        <div className="p-0 col-lg-5 col-8 d-lg-block d-flex justify-content-center">
          <button className="py-2 px-5 btn btn-primary">Giriş Yap</button>
        </div>
      </form>
      <div className="row justify-content-center mt-4">
        <div className="p-0 col-lg-5 col-8 d-lg-block d-flex flex-column align-items-center">
          <div className="mb-3">
            <h5>Üye Değilseniz</h5>
          </div>
          <div>
            <button
              type="submit"
              style={{ width: "158.45px" }}
              className="py-2 px-5 btn btn-primary position-relative"
            >
              <Link
                to={"/Member"}
                className="stretched-link color-white"
                style={{ color: "white" }}
              >
                Üye Ol
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
