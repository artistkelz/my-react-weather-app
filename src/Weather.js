import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }
  let apiKey = "44c433b8d9236adacf244d61ee2e704d";
  let apiURL = `https://api.openweather.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
