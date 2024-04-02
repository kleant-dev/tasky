import React from "react";

export default function Form() {
  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
      />
      <button className="todo-input-button">ADD</button>
    </form>
  );
}
