import React from "react";
import "../../Styles/Components/CustomSubCard/index.css";
import { useSelector } from "react-redux";
import { backGroundDecider } from "../../services/callWeather";

const CustomSubCard = () => {
  const { foreCastData } = useSelector((state) => state.weatherData);
  // forecast data is an array of data for individual dates. That has been mapped into bootstrap cards.

  //Bootstrap grid has been used for responsiveness

  if (foreCastData.length === 0) return null;
  return (
    <div className="row justify-content-md-center">
      {foreCastData?.map((el, key) => {
        return (
          <div class="col">
          <div className={`card custom_sub_card ${backGroundDecider(el.day)}`} key={key}>
            <img
              className="card-img-top"
              src={el.day.condition.icon}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{el.date}</h5>
              <p className="card-text">{el.day.condition.text}</p>
            </div>
          </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default CustomSubCard;
