import { React, useEffect, useState } from "react";
import superagent from "superagent";
// import agent from './agent'
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { Route, Routes } from 'react-router-dom';

const Booking = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    if (!process.env.REACT_APP_WEATHER_API_KEY) {
      console.log("REACT_APP_WEATHER_API_KEY should be defined");
    }

    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${process.env.REACT_APP_WEATHER_API_KEY}&include=current`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.currentConditions.temp);
        setTemp(response.currentConditions.temp);
      })

      .catch((err) => console.error(err));
  }, [latitude, longitude]);
  const convertCelsius = Math.floor((temp - 32) * (5 / 9));
  return (
    <section id="booking-content">
      <h2 className="booking-content__title">Discover Serenity</h2>
      <p className="booking-content__para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        perferendis numquam, ipsam cupiditate at molestias. Sequi similique,
        molestiae nostrum dicta, unde modi libero fugiat suscipit, labore neque
        dolorum quos iste!
      </p>
      <div className="booking-content__icons">
        <div className="booking-content__icons--weather">
          <i className="far fa-sun"></i>
          <p>
            {convertCelsius}
            <sup>&#8451;</sup>
          </p>
        </div>

        <div className="booking-content__icons--time">
          <i className="far fa-clock"></i>
          <p>05:00 PM</p>
        </div>

        <div className="booking-content__icons--location">
          <i className="fas fa-map-marker-alt"></i>
          <p>05:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
