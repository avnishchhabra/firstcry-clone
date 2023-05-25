import React from "react";
import Card from "./Card";
import "./home.css";
import pmOne from "../../assets/home/primiumBoutiques/pmOne.jpeg";
import pmTwo from "../../assets/home/primiumBoutiques/pmTwo.jpeg";
import pmThree from "../../assets/home/primiumBoutiques/pmThree.jpeg";
import pmFour from "../../assets/home/primiumBoutiques/pmFour.jpeg";
import pmFive from "../../assets/home/primiumBoutiques/pmFive.jpeg";
import pmSix from "../../assets/home/primiumBoutiques/pmSix.jpeg";
import CardWrapper from "../../components/CardWrapper";
import summerSale from "../../assets/summerSale.jpeg"
import summerOne from "../../assets/summerOne.jpeg"
import summerTwo from "../../assets/summerTwo.jpeg"
import summerThree from "../../assets/summerThree.jpeg"
import summerFour from "../../assets/summerFour.jpeg"
import baby1 from "../../assets/baby1.jpeg"
import baby2 from "../../assets/baby2.jpeg"
import baby3 from "../../assets/baby3.jpeg"
import baby4 from "../../assets/baby4.jpeg"
import baby5 from "../../assets/baby5.jpeg"
import baby6 from "../../assets/baby6.jpeg"
import baby7 from "../../assets/baby7.jpeg"
import baby8 from "../../assets/baby8.jpeg"
import f1 from "../../assets/fashion1.jpeg"
import f2 from "../../assets/fashion2.jpeg"
import f3 from "../../assets/fashion3.jpeg"
import ethnic from "../../assets/ethnic.jpeg"
import party from "../../assets/party.jpeg"
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    path: pmOne,
  },
  {
    id: 2,
    path: pmTwo,
  },
  {
    id: 3,
    path: pmThree,
  },
  {
    id: 4,
    path: pmFour,
  },
  {
    id: 5,
    path: pmFive,
  },
  {
    id: 6,
    path: pmSix,
  },
  {
    id: 7,
    path: pmOne,
  },
  {
    id: 8,
    path: pmTwo,
  },
  {
    id: 9,
    path: pmThree,
  },
];

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="bib">
      <div className="mainPage">
        <h2
          style={{
            marginBottom: "20px",
            marginTop: "10px",
            fontSize: "21px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          PREMIUM BIOTIQUES
        </h2>

        <div className="cardDiv">
          {items.map(({ id, path }) => {
            return <Card key={id} path={path} />;
          })}
        </div>
        <CardWrapper
          styles={{
            width: "85%",
            marginTop: "30px",
            padding: "20px 0",
            fontWeight: "bold",
          }}
        >
          View All Boutiques
        </CardWrapper>
        <img src={summerSale} />
        <div>
            <img onClick={() => navigate('product')} src={summerOne} />
            <img onClick={() => navigate('product')} src={summerTwo} />
            <img onClick={() => navigate('product')} src={summerThree} />
            <img onClick={() => navigate('product')} src={summerFour} />
        </div>
        <div style={{display: 'flex', overflowX: 'hidden'}}>
            <img onClick={() => navigate('product')} src={baby1} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby2} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby3} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby4} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby5} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby6} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby7} style={{ maxWidth: '100%', height: 'auto' }} />
            <img onClick={() => navigate('product')} src={baby8} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
            <img onClick={() => navigate('product')} src={f1} />
            <img onClick={() => navigate('product')} src={f2} />
            <img onClick={() => navigate('product')} src={f3} />
        </div>
        {/* <div style={{display: 'flex'}}>
            <img src={ethnic} />
            <img src={party} />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
