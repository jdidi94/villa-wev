import { React, useEffect, useState } from "react";
import superagent from "superagent";
// import agent from './agent'
import { DateRange } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

const BookingDate = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  useEffect(() => {
    console.log(date[0].startDate.getMonth());
  });

  return (
    <section id="booking-date">
      <div className="booking-date__schedule">
        <div className="booking-date__schedule--arrival">
          <h5>Arrival</h5>
          <div>
            <p>May</p>
            <p>09</p>
            <p>&#65088;</p>
          </div>
        </div>

        <div className="booking-date__schedule--departure">
          <h5>Departure</h5>
          <div>
            <p>May</p>
            <p>23</p>
            <p>&#65088;</p>
          </div>
        </div>

        <div className="booking-date__schedule--guests">
          <h5>Guests</h5>
          <div>
            <p>&#65087;</p>
            <p>09</p>
            <p>&#65088;</p>
          </div>
        </div>
      </div>

      <div className="booking-date__contact">
        <a href="#" className="booking-date__contact--link">
          Make a Reservation
        </a>
        <div>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#730039"]}
            color={"#ffc513"}
            minDate={new Date()}
          />
        </div>
        <p>Reservation Hotline</p>
        <p>+1-5263-8965-6547</p>
        <p>Reservation Assistance Available 24 Hours</p>
      </div>
    </section>
  );
};

export default BookingDate;
