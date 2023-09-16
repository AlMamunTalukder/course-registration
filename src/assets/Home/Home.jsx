/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, SetSelectedCourse] = useState([]);
  const [remaining, SetRemaining] = useState(20);
  const [totalHour, SetTotalHour] = useState(0);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExit = selectedCourse.find((item) => item.id == course.id);

    let count = course.price;

    if (isExit) {
      return alert("You Already Booked it.");
    } else {
      selectedCourse.forEach((item) => {
        count += item.price;
      });

      const remaining = 20 - count;

      if (count > 20) {
        return alert("no more hour to buy course..");
      } else {
        SetRemaining(remaining);
        SetSelectedCourse([...selectedCourse, course]);
        SetTotalHour(count);
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
              {" "}
              Select{" "}
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
