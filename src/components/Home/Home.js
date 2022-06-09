import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import cardDataService from "../../Services/cardDataService";
import { ADD } from "../../redux/actions";
export default function Home() {
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    cardDataService().then((items) => {
      console.log(items);
      setCardData(items);
    });
  }, []);
  const addItem = (item) => {
      console.log("add item called")
    dispatch(ADD(item));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cardData &&
          cardData.map((item, i) => (
            <div className="home" key={i}>
              <div className="card__title">
                <h2> {item.title}</h2>
              </div>
              <div className="card__image">
                <img src={item.img} alt="Test image" height={400} width={300} />
              </div>
              <div className="price">Price : 450</div>
              <div className="cart__button">
                <button onClick={() => addItem(item)}> Add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
