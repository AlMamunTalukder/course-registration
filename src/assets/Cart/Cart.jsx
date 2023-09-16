/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ remaining, selectedCourse, totalHour }) => {
  return (
    <div>
      <h5>Credit Hour Remaining {remaining} hr </h5>
      <h3>Course Name {selectedCourse}</h3>
      <h5>Total Credit Hour: {totalHour}</h5>
      {selectedCourse.map((courseName) => (
        <li key={courseName.id}>{courseName.name}</li>
      ))}
    </div>
  );
};

export default Cart;
