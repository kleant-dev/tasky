import React from "react";
import { useTodos } from "../context/TodosContext";

export default function TodoItem({ id, title, finished }) {
  const { dispatch } = useTodos();
  return (
    <div className="todo-item">
      <div className="radio-title">
        {!finished ? (
          <img
            src="/src/assets/Radio button unchecked.svg"
            alt="radio button"
            className="radio"
            onClick={() => dispatch({ type: "todos/finishTodo", payload: id })}
          />
        ) : (
          <img
            src="/src/assets/Check circle outline.svg"
            alt="radio button"
            className="radio"
            onClick={() =>
              dispatch({ type: "todos/reverseFinishTodo", payload: id })
            }
          />
        )}

        <h3 className={`todo-title ${finished ? "finished" : ""}`}>{title}</h3>
      </div>
      <img
        src="/src/assets/Delete outline.svg"
        alt="delete"
        className="delete-btn"
        onClick={() => dispatch({ type: "todos/deleteTodo", payload: id })}
      />
    </div>
  );
}
