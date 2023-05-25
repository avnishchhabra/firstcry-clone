import React from "react";
import CardWrapper from "../../components/CardWrapper";
// import s from "../../assets/home/primiumBoutiques"

const Card = ({path}) => {
  return (
    <CardWrapper>
        <img
        src={path}
        width="399px"
        alt=""
      />
      <p style={{ marginTop: "10px" }}>Kids Favourit | Up To 24M</p>
      <p className="pera"> Collection that suits their style </p>
    </CardWrapper>
  );
};

export default Card;
