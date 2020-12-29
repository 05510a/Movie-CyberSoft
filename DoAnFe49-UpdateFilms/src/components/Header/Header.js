import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { LayThongTinTaiKhoan } from "../../redux/actions/QuanLyNguoiDungAction";
import cx from "classnames";
import styles from "./Header.module.css";
import { UserOutlined } from "@ant-design/icons";
import "./Header.css";
export default function Header() {
  const { thongTinTaiKhoan } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  // console.log(thongTinTaiKhoan)
  let dispatch = useDispatch();
  let userLogin = {};
  userLogin = JSON.parse(localStorage.getItem("userLogin"));
  useEffect(() => {
    dispatch(LayThongTinTaiKhoan(userLogin));
  }, []);

  return (
    <div id={styles.header}>
      <nav className="navbar navbar-expand-sm bg-dark" style={{ height: 60 }}>
        <ul className="navbar-nav row container-fluid mx-auto ">
          <li className="nav-item col-1 ">
            <NavLink to="/home">
              <div
                className={styles.Header_Logo}
                style={{ cursor: "pointer", height: "50px", width: "50px" }}
              ></div>
            </NavLink>
          </li>
          <li className="nav-item col-8 text-white text-center mx-auto">
            <a href="#DANHSACHPHIM" className={styles.Infomation}>
              Lịch Chiếu{" "}
            </a>

            <a href="#NEWS" className={styles.Infomation}>
              Tin Tức{" "}
            </a>
            <a href="#APP" className={styles.Infomation}>
              Ứng dụng
            </a>
          </li>

          <ul className="nav-item col-3 text-white row mx-auto container">
            {localStorage.getItem("userLogin") ? (
              <div className="container row">
                <li className="col-8" style={{ listStyle: "none" }}>
                  <i
                    className="fa fa-user-circle mr-3"
                    style={{ fontSize: "25px" }}
                  ></i>
                  <NavLink
                    to="/profile"
                    className="nav-Link"
                    style={{ fontSize: "20px" }}
                  >
                    Hi,{`${userLogin?.hoTen}`}
                  </NavLink>
                </li>
                <a
                  onClick={() => {
                    localStorage.removeItem("userLogin");
                    localStorage.removeItem("accessToken");
                  }}
                  href="/"
                  className="nav-Link"
                  style={{
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  className={cx(styles.button, "col-4", "btn btn-success")}
                >
                  Đăng Xuất
                </a>
              </div>
            ) : (
              <>
                <div className="logIn col-6">
                  <NavLink
                    style={{ width: "100%", fontWeight: "bold" }}
                    className={cx(styles.button, "btn btn-success")}
                    activeStyle={{ color: "red" }}
                    exact
                    to="/login"
                  >
                    Đăng Nhập
                  </NavLink>
                </div>
                <div className="city col-6">
                  <NavLink
                    exact
                    to="/singup"
                    style={{
                      width: "100%",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    className={cx(styles.button, "btn btn-warning")}
                  >
                    Đăng Kí
                  </NavLink>
                </div>
              </>
            )}
          </ul>
        </ul>
      </nav>
    </div>
  );
}
