import React from "react";

export default function Nextarrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        height: "10px",
        width: "15px",
        fontSize: "30px",
      }}
      onClick={onClick}
    >
      <i className=" nextArrow fa fa-angle-right"></i>
    </div>
  );
}
