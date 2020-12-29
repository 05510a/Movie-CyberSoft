import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";
import ModalVideo from "react-modal-video";
export default function Carousel_section(props) {
  const [openModal, setopenModal] = useState(false);
  const [trailer, settrailer] = useState("");
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

  const RenderCarousel = () => {
    return (
      <div className="Carousel_content">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/oAYQn3h.jpg"
              alt="First slide"
              style={{ height: "700px" }}
            />
            <div
              className="playVideo "
              onClick={() => {
                setopenModal(true);
                settrailer("https://www.youtube.com/embed/eLd55DPT9lE");
              }}
            >
              <i className="fa fa-play-circle"></i>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://i0.wp.com/thuvienanh.net/wp-content/uploads/2019/04/hinh-nen-gia-dinh-sieu-nhan-incredibles-2-dep-6.jpg?resize=1920%2C1080&ssl=1"
              alt="Third slide"
              style={{ height: "700px" }}
            />
            <div
              className="playVideo"
              onClick={() => {
                setopenModal(true);
                settrailer("https://www.youtube.com/embed/ijhcpo3lmK4");
              }}
            >
              <i className="fa fa-play-circle"></i>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gameviet.mobi/wp-content/uploads/2020/03/Hinh-Nen-Lien-Quan-Mobile-Wallpaper-Cho-Iphone-Android.jpg"
              alt="Third slide"
              style={{ height: "700px" }}
            />
            <div
              className="playVideo"
              onClick={() => {
                setopenModal(true);
                settrailer("https://www.youtube.com/embed/uTsEZggYBWw");
              }}
            >
              <i className="fa fa-play-circle"></i>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
  return (
    <div>
      {RenderCarousel()}
      {Playtrailer()}
    </div>
  );
}
