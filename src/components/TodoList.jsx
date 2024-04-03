import React from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodosContext";

export default function TodoList() {
  const { todos, proTodos, dispatch, todoType } = useTodos();
  return (
    <div className="container">
      {todoType === "personal" ? (
        <div className="todos-container">
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                finished={todo.finished}
                id={todo.id}
              />
            ))}
          {todos.some((todo) => todo.finished) && (
            <img
              src="/src/assets/Clear complete.svg"
              alt="clear completed"
              className="clear-btn"
              onClick={() => dispatch({ type: "todos/deleteFinished" })}
            />
          )}
        </div>
      ) : (
        <div className="todos-container">
          {proTodos.length > 0 &&
            proTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                finished={todo.finished}
                id={todo.id}
              />
            ))}
          {proTodos.some((todo) => todo.finished) && (
            <img
              src="/src/assets/Clear complete.svg"
              alt="clear completed"
              className="clear-btn"
              onClick={() => dispatch({ type: "todos/deleteFinished" })}
            />
          )}
        </div>
      )}
    </div>
  );
}
