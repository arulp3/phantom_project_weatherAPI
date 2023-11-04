import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../services/callWeather";
import { useDispatch } from "react-redux";
import { getCurrentData, getForecastData, getLocationData } from "../../app/slices/weatherSlice";

const CustomInput = () => {
  
  /// All states will be maintained in Redux state

    const dispatch = useDispatch()

    const [value, setValue] = useState(null)

    ///onChange hanlder
    const onChangeHandler = (e)=>{
       const {value} = e.target
       setValue(value)
    }

    ////debounce function is maintained in a useEffect hook. The function will wait for 2 second once the user enters the input
    useEffect(()=>{
     const getData = setTimeout(() => {
       if(value !== null){
        fetchData()
       }
      }, 2000)

      return ()=>clearTimeout(getData)
    }, [value])

    //// API call will save the response to the redux state
    const fetchData = async ()=>{
       let response = await getWeatherData(value)
        let {current, forecast, location} = await response
        //// three different data are coming from API, all three will be dispatched into three differnet states for easy understanding
        dispatch(getCurrentData(current))
        dispatch(getForecastData(forecast))
        dispatch(getLocationData(location))
    }
  return (
    <div>
      <input
        type="text"
        class="form-control custom_input"
        id="nameOfCity"
        placeholder="Enter a city!"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CustomInput;
