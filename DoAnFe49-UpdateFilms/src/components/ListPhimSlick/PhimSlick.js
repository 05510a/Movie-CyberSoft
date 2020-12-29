import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import ModalVideo from "react-modal-video";
import { layDanhSachPhimApiAction } from "../../redux/actions/QuanLyPhimAction";
import { useDispatch, useSelector } from "react-redux";
import NextArrows from "./NextArrows";
import PreArrows from "./PreArrows";

export default function PhimSlick() {
  const dispatch = useDispatch();

  const danhSachPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  console.log("danhsachPhim", danhSachPhim);
  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, []);

  const [openModal, setopenModal] = useState(false);
  const [trailer, setTrailer] = useState("");
  const Playtrailer = () => {
    return (
      <div>
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={openModal}
          url={trailer}
          onClose={() => setopenModal(false)}
        />
      </div>
    );
  };
  const renderPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="col-3 mb-3 listPhim_Card" key={index}>
          <div
            className="card"
            style={{ width: "100%", height: "400px", border: "none" }}
          >
            <div className="card-top">
              <button
                className="ListPhim_Trailer"
                onClick={() => {
                  setTrailer(phim.trailer);
                  setopenModal(true);
                  Playtrailer();
                }}
                style={{ background: "none" }}
              >
                <i className="fa fa-play"></i>
              </button>

              <img
                className="card-img-top "
                width="100%"
                height="300px"
                style={{ backgroundSize: "cover" }}
                src={phim.hinhAnh}
                alt="123"
                onError={(e) => {
                  e.target.src = "https://picsum.photos/300/300";
                }}
              />
              <div className=" ListPhim_Over "></div>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title" style={{ color: "white" }}>
                {phim.tenPhim}
              </h4>

              <p
                className="card-text"
                style={{
                  width: "100%",
                  height: "50px",
                }}
              >
                {phim.moTa}
              </p>
              <NavLink
                to={`/detail/${phim.maPhim}`}
                className="Button BuyTicket"
              >
                <span>Mua vé</span>
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrows />,
    prevArrow: <PreArrows />,
  };

  return (
    <div
      id="DANHSACHPHIM"
      className="Details"
      style={{ backgroundImage: 'url("./img/movie-details-bg.jpg") ' }}
    >
      <h1 className="text-center text-white" style={{ padding: "30px 0px" }}>
        Danh Sách Phim
      </h1>
      {Playtrailer()}
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
}
