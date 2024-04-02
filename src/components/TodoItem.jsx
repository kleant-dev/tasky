import React from "react";

export default function TodoItem() {
  return (
    <div className="todo-item">
      <div className="radio-title">
        <img
          src="/src/assets/Radio button unchecked.svg"
          alt="radio button"
          className="unchecked-radio"
        />
        <h3 className="todo-title">Some text nr.2</h3>
      </div>
      <img
        src="/src/assets/Delete outline.svg"
        alt="delete"
        className="delete-btn"
      />
    </div>
  );
}
