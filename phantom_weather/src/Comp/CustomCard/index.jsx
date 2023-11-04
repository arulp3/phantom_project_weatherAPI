import React from "react";
import "../../Styles/Components/CustomCard/index.css";
import { useSelector } from "react-redux";
//for customised class calling, backGroundDecider() function will determine the class based on the API response.
import { backGroundDecider } from "../../services/callWeather";

const CustomCard = () => {
  /// The fetched API data will come from redux and current data and location data will be used to populate the main card.
  const { currentData, locationData } = useSelector(
    (state) => state.weatherData
  );

  if (currentData === null) return null;
  return (
    <>
      <div className={`card custom_card ${backGroundDecider(currentData)}`}>
        <img
          className="card-img-top"
          src={currentData.condition.icon}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            {locationData.name},{locationData.country}{" "}
          </h5>
          <p className="card-text">
            Current : {currentData.temp_c}&deg; {currentData.condition.text}
          </p>
          <p className="card-text">
            Feels like : {currentData.feelslike_c}&deg;
          </p>
          <p>Feels like : {currentData.humidity}&deg;</p>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
