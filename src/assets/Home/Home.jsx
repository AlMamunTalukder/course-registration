/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const getTotalCreditHours = () => {
    return selectedCourse.reduce((total, course) => total + course.credit, 0);
  };

  const handleSelectedCourse = (course) => {
    const isExit = selectedCourse.find((item) => item.id === course.id);

    let count = course.credit;

    if (isExit) {
      toast.error("You Already Booked it.");
    } else {
      selectedCourse.forEach((item) => {
        count += item.credit;
      });

      const remaining = 20 - count;

      console.log(remaining);

      if (count > 20) {
        toast.error("No credit hour remaining...");
      } else {
        setRemaining(remaining);
        setTotalHour(count);
        setSelectedCourse([...selectedCourse, course]);
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
        <ToastContainer />
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
