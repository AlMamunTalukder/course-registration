/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

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
            <button className="card-btn">Select</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
