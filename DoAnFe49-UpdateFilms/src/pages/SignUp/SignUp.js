import { NavLink, useHistory } from "react-router-dom";
import styles from "./SignUp.module.css";
import cx from "classnames";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { userService } from "../../Services/index";
import { signupUserSchema } from "../../Services/User";
import swal from "sweetalert2";

import React from "react";

export default function Signup(props) {
  let history = useHistory();

  const _handleSummit = (values) => {
    return userService
      .signUp(values)
      .then((res) => {
        console.log(res);
        swal.fire("", `Đăng kí thành công`, "success");
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        swal.fire("", `${err.response.data}`, "error");
      });
  };

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
          <div className={cx(styles.card, "card")}>
            <NavLink
              to="/"
              className="btn btn-none"
              style={{ width: "50px", fontSize: "25px" }}
            >
              {" "}
              <i style={{ color: "red" }} className="fa fa-times-circle"></i>
            </NavLink>
            <div className="card-header">
              <h3>Đăng Kí</h3>
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
                  hoTen: "",
                  email: "",
                  soDt: "",
                  maNhom: "GP01",
                  maLoaiNguoiDung: "KhachHang",
                }}
                validationSchema={signupUserSchema}
                onSubmit={_handleSummit}
                render={(formikProps) => (
                  <Form>
                    <div
                      style={{ display: "none" }}
                      className="input-group form-group"
                    >
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài Khoản"
                        name="maNhom"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="input-group form-group"
                    >
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tài Khoản"
                        name="maLoaiNguoiDung"
                        onChange={formikProps.handleChange}
                      />
                    </div>
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

                    <ErrorMessage name="taiKhoan" className="form-control">
                      {(msg) => (
                        <div
                          className="alert alert-danger Warning"
                          style={{ height: "35px" }}
                        >
                          <p className={styles.Danger}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>

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
                    <ErrorMessage name="matKhau">
                      {(msg) => (
                        <div
                          className="alert alert-danger Warning"
                          style={{ height: "35px" }}
                        >
                          <p className={styles.Danger}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div
                          className="alert alert-danger Warning"
                          style={{ height: "35px" }}
                        >
                          <p className={styles.Danger}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Tên Người dùng"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <ErrorMessage name="hoTen">
                      {(msg) => (
                        <div
                          className="alert alert-danger Warning"
                          style={{ height: "35px" }}
                        >
                          <p className={styles.Danger}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-mobile"></i>
                        </span>
                      </div>
                      <Field
                        type="phone"
                        className="form-control"
                        placeholder="Số điện thoại"
                        name="soDt"
                        onChange={formikProps.handleChange}
                      />
                    </div>
                    <ErrorMessage name="soDt">
                      {(msg) => (
                        <div
                          className="alert alert-danger Warning"
                          style={{ height: "35px" }}
                        >
                          <p className={styles.Danger}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                    <div className="form-group">
                      <button
                        type="submit"
                        defaultValue="Login"
                        className="btn float-right login_btn"
                      >
                        Đăng Kí
                      </button>
                    </div>
                  </Form>
                )}
              />
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Bạn Đã có Tài Khoảng
                <NavLink exact to="/logIn">
                  Đăng Nhập
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
