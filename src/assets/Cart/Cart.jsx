/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ remaining, selectedCourse, totalHour }) => {
  return (
    <div className="cart-container">
      <h5>Credit Hour Remaining {remaining} hr </h5>
      <hr />
      <h3>Course Name ({selectedCourse.length})</h3>

      <ol>
        {selectedCourse.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ol>
      <hr />
      <h5>Total Credit Hour: {totalHour}hr</h5>
      <hr />
      <h5>Total Price: </h5>
    </div>
  );
};

export default Cart;
