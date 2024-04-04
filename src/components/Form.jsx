import React, { useState } from "react";
import { addTodo } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { todos, proTodos } = useSelector((store) => store.todos);
  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 5) return;
    const todo = {
      id: todos.length + proTodos.length + 1,
      title,
      finished: false,
    };
    dispatch(addTodo(todo));
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
