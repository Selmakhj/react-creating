import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="col-9" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder="Enter a city.."
        onChange={updateCity}
      />
      <button className="search-button" type="Submit">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <div className="row">
            <div className="col-3">
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="units">°C </span>
              <br />
            </div>
            <div className="col-5">
              <span>Description: {weather.description}</span>
              <br />
              <span>Humidity: {weather.humidity}%</span> <br />
              <span>Wind: {weather.wind}km/h</span> <br />
            </div>
            <div className="col-4">
              <span>
                <img src={weather.icon} alt={weather.description} />
              </span>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
