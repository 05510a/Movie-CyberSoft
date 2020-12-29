import React from "react";
import "./Login.css";

import { NavLink, useHistory } from "react-router-dom";
import { Form, Formik, Field } from "formik";

import { useDispatch } from "react-redux";
import { dangNhapApiAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function LogIn() {
  let dispatch = useDispatch();
  let history = useHistory();

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./img/03dc1ccfbea9bfa1be50d6134bb706cb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <NavLink
              to="/"
              className="btn btn-none"
              style={{ width: "50px", fontSize: "25px" }}
            >
              {" "}
              <i style={{ color: "red" }} className="fa fa-times-circle"></i>
            </NavLink>
            <div className="card-header">
              <h3>Đăng Nhập</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-facebook-square" />
                </span>
                <span>
                  <i className="fab fa-google-plus-square" />
                </span>
                <span>
                  <i className="fab fa-twitter-square" />
                </span>
              </div>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                  dispatch(dangNhapApiAction(values, history));
                }}
                render={(formikProps) => (
                  <Form>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài Khoản"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key"></i>
                        </span>
                      </div>
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Mật Khẩu"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <div className="row align-items-center remember">
                      <input type="checkbox" />
                      Nhớ mật khẩu
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        defaultValue="Login"
                        className="btn float-right login_btn"
                      >
                        Đăng Nhập
                      </button>
                    </div>
                  </Form>
                )}
              ></Formik>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Bạn chưa có tài Khoảng<NavLink to="/singup">Đăng Kí</NavLink>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Quên mật Khẩu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
