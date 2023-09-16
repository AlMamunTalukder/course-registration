/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalHour, setTotalHour] = useState(0);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExit = selectedCourse.find((item) => item.id === course.id);

    if (isExit) {
      alert("You Already Booked it.");
    } else {
      const count = totalHour + course.credit;

      if (count > 20) {
        alert("No more hours to buy courses.");
      } else {
        const remaining = 20 - count;

        setRemaining(remaining);

        setSelectedCourse([...selectedCourse, course]);
        setTotalHour(count);
      }
    }
  };

  return (
    <div className="container">
      <div className="card-container">
        {course.map((courseName) => (
          <div key={courseName.id} className="card">
            <div className="card-img">
              <img className="photo" src={courseName.image} alt="" />
            </div>
            <h3>{courseName.name}</h3>
            <p>
              <small>{courseName.description}</small>
            </p>
            <div className="info">
              <p>$ Price: {courseName.price}</p>
              <p>Credit: {courseName.credit}</p>
            </div>
            <button
              onClick={() => handleSelectedCourse(courseName)}
              className="card-btn"
            >
              Select
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <Cart
          remaining={remaining}
          selectedCourse={selectedCourse}
          totalHour={totalHour}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
