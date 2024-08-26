import React from "react";
import WeatherSearch from "./weathersearch";
import Footer from "./Footer";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="headline">Weather App</h1>
      <WeatherSearch />
      <Footer />
    </div>
  );
}
