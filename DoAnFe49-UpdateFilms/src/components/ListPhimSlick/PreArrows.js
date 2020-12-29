import React from "react";

export default function Prearrows(props) {
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
      <i className="prevArrow fa fa-angle-left"></i>
    </div>
  );
}
