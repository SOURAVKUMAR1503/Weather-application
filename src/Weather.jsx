import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  function handleCity(e) {
    setCity(e.target.value);
    setError("");
  }

  function handleReport() {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18260c98b7455c82e11c94e9c8ee4404`
    )
      .then((res) => {
        setWeatherData({
          city: res.data.name,
          country: res.data.sys.country,
          temperature: Math.round(res.data.main.temp),
          weather: res.data.weather[0].main,
          description: res.data.weather[0].description,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
        });

        setCity("");
      })
      .catch(() => {
        setError("City not found. Please check the spelling.");
        setWeatherData(null);
      });
  }

  function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleReport();
    }
  }

  return (
    <div className="weather-app">

      <div className="weather-container">

        <h1>WEATHER APP</h1>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCity}
            onKeyDown={handleKeyPress}
          />

          <button onClick={handleReport}>
            Get Weather
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* Weather Result */}
        {weatherData && (
          <div className="weather-card">

            <h2>
              {weatherData.city}, {weatherData.country}
            </h2>

            {/* Temperature */}
            <div className="temperature">
              {weatherData.temperature}°C
            </div>

            {/* Weather */}
            <div className="weather-condition">
              <h3>{weatherData.weather}</h3>
              <p>{weatherData.description}</p>
            </div>

            {/* Sunrise & Sunset */}
            <div className="sun-times">

              <div className="sun-box">
                <span>🌅</span>
                <h4>Sunrise</h4>
                <p>{formatTime(weatherData.sunrise)}</p>
              </div>

              <div className="sun-box">
                <span>🌇</span>
                <h4>Sunset</h4>
                <p>{formatTime(weatherData.sunset)}</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};