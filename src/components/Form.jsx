import React, { useState } from "react";
import { useTodos } from "../context/TodosContext";
export default function Form() {
  const [title, setTitle] = useState("");
  const { dispatch, todos, proTodos } = useTodos();
  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 5) return;
    const todo = {
      id: todos.length + proTodos.length + 1,
      title,
      finished: false,
    };
    dispatch({ type: "todos/addTodo", payload: todo });
    setTitle("");
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todo-input-button" type="submit">
        ADD
      </button>
    </form>
  );
}
