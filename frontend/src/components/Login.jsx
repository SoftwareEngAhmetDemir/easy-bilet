import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import EeasyBiletInput from "./EeasyBiletInput";

function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        "/login",
        {
          email: data.email || "",
          parola: data.parola || "",
        },
        axiosConfig
      )
      .then(({ data }) => {
        let { msg } = data;
        if (msg === 200) {
          navigate("/biletal");
        } else {
          window.alert("Şifre Veya Kullanıcı adı yanlıştır");
        }
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

            <EeasyBiletInput
              control={control}
              name={"email"}
              placeholder="email"
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

            <EeasyBiletInput
              control={control}
              name={"parola"}
              placeholder="parola"
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
