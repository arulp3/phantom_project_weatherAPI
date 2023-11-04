////exportable function for API call


const getWeatherData = async (cityValue) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?q=${cityValue}&days=5`;

  try {
    const result = await fetch(url, {
      method: "GET",
      headers: {
        key: "26d73876a088473f856120322230311",
      },
    });
    const response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};


////background class decider

const backGroundDecider = (currentData) => {
  if (currentData.condition.text.includes("rain")) {
    return "rain";
  } else if (currentData.condition.text.includes("Sunny")) {
    return "sun";
  } else if (currentData.condition.text.includes("Mist")) {
    return "mist";
  } else if (currentData.condition.text.includes("cloudy")) {
    return "cloudy";
  } else if (currentData.condition.text.includes("Overcast")) {
    return "cloudy";
  } else if (currentData.condition.text.includes("Clear")) {
    return "sun";
  }
};

export { getWeatherData, backGroundDecider };
