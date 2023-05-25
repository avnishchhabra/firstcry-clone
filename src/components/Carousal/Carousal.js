import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousal.css";
import One from "../../assets/carousal/c1.jpeg"
import Two from "../../assets/carousal/c2.jpeg"
import Three from "../../assets/carousal/c3.jpeg"
import Four from "../../assets/carousal/c4.jpeg"
import Five from "../../assets/carousal/c5.jpeg"
import Six from "../../assets/carousal/c6.jpeg"
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    path: One,
  },
  {
    id: 2,
    path: Two,
  },
  {
    id: 3,
    path: Three,
  },
  {
    id: 4,
    path: Four,
  },
  {
    id: 5,
    path: Five,
  },
  {
    id: 6,
    path: Six,
  },
];

const Carousal = () => {
  const navigate = useNavigate()
  return (
    <Carousel>
      {items.map(({ id, path }) => (
        <Carousel.Item key={id}>
          <img
            className="carousal1"
            src={path}
            alt="Slide"
            onClick={() => navigate('product')}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousal;
