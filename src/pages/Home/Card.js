import React from "react";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../components/CardWrapper";

const Card = ({path}) => {
  const navigate = useNavigate()
  return (
    <CardWrapper>
        <img
        src={path}
        width="399px"
        alt=""
        onClick={() => navigate('product')}
      />
      <p style={{ marginTop: "10px" }}>Kids Favourit | Up To 24M</p>
      <p className="pera"> Collection that suits their style </p>
    </CardWrapper>
  );
};

export default Card;
