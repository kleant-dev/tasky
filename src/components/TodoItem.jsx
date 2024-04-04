import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, finishTodo, reverseFinishTodo } from "./todosSlice";

export default function TodoItem({ id, title, finished }) {
  const dispatch = useDispatch();
  return (
    <div className="todo-item">
      <div className="radio-title">
        {!finished ? (
          <img
            src="/src/assets/Radio button unchecked.svg"
            alt="radio button"
            className="radio"
            onClick={() => dispatch(finishTodo(id))}
          />
        ) : (
          <img
            src="/src/assets/Check circle outline.svg"
            alt="radio button"
            className="radio"
            onClick={() => dispatch(reverseFinishTodo(id))}
          />
        )}

        <h3 className={`todo-title ${finished ? "finished" : ""}`}>{title}</h3>
      </div>
      <img
        src="/src/assets/Delete outline.svg"
        alt="delete"
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(id))}
      />
    </div>
  );
}
