import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="container">
      <div className="todos-container">
        <TodoItem />
      </div>
    </div>
  );
}
