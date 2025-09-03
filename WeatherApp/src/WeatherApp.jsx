import React, { useState, useEffect } from "react";
import styles from "./WeatherApp.module.css";

const WeatherApp = () => {
  const [city, setCity] = useState("Karachi"); // Default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName = city) => {
    try {
      const apiKey = "a15bb2f30bf5080d4059c58c6827ad47";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError(data.message || "City not found!");
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Something went wrong. Try again later!");
      setWeather(null);
    }
  };

  // 👇 Page load hote hi Karachi ka weather fetch hoga
  useEffect(() => {
    fetchWeather("Karachi");
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🌤 Weather App</h1>

      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />
        <button onClick={() => fetchWeather()} className={styles.btn}>
          Get Weather
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.card}>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>🌡 {weather.main.temp} °C</p>
          <p>☁ {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
