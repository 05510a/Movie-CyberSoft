import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { NavLink } from "react-router-dom";
import { layChiTietPhimAction } from "../../redux/actions/QuanLyPhimAction";
import swal from "sweetalert2";
export default function Buyticket(props) {
  const { chiTietPhim, dsPhim } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhimAction(props.match.params.id));
  }, []);
  console.log(chiTietPhim.heThongRapChieu);

  return (
    <div>
      <div
        style={{ backgroundColor: "black", height: "60px", width: "100%" }}
      ></div>
      <div
        className="Detail"
        style={{
          width: "100%",
          height: "100%",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="Detail_cover"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>
        <div className="Detail_content container">
          <div className="row Detail_infomation">
            <div className="col-5">
              <h2 className="text-white mb-4">{chiTietPhim.tenPhim}</h2>
              <img width="100%" height="400px" src={chiTietPhim.hinhAnh}></img>
            </div>
            <div className="col-7 ticket_Detail ">
              <div className="row  ">
                <div className="col-10 ml-5 text-white ">
                  <h1 style={{ color: "white" }}>{chiTietPhim.tenPhim}</h1>
                  <h3 style={{ color: "white" }} className="mt-4">
                    Mô tả:
                  </h3>
                  <p className="mt-3">{chiTietPhim.moTa}.</p>
                  <h4 style={{ color: "white" }} className="my-3">
                    Ngày khởi chiếu :{" "}
                    <p className="my-3">{chiTietPhim.ngayKhoiChieu}</p>
                  </h4>
                  <h4 style={{ color: "white" }} className="my-3">
                    RATE: {chiTietPhim.danhGia}/10
                  </h4>
                  <button
                    className="btn btn-success buyTicket "
                    onClick={() => {
                      swal.fire("", `Vui lòng chọn giờ chiếu`, "error");
                    }}
                  >
                    Mua Vé
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container lichchieu text-white">
          <h1 className="mt-5 mb-5 pt-3" style={{ color: "white" }}>
            Thông tin lịch chiếu
          </h1>
          <div className="row">
            <div
              className="nav flex-column nav-pills col-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <a
                    key={index}
                    className={`nav-link ${active}`}
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <img src={heThongRap.logo} width={50} height={50} />{" "}
                    {heThongRap.tenHeThongRap}
                  </a>
                );
              })}
            </div>
            <div className="tab-content col-9" id="v-pills-tabContent">
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <div
                    key={index}
                    className={`tab-pane fade show ${active}`}
                    id={heThongRap.maHeThongRap}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index}>
                          <h3 style={{ color: "white" }}>{cumRap.tenCumRap}</h3>
                          <div
                            className="row"
                            style={{ overflow: "hidden", height: "70px" }}
                          >
                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                              return (
                                <NavLink
                                  to={`/booking/${lichChieu.maLichChieu}`}
                                  className="col-3 GioChieu"
                                  key={index}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
