import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteFinished } from "./todosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos, proTodos, todoType } = useSelector((store) => store.todos);
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem(
      "todos",
      JSON.stringify({ personalTodos: todos, proTodos })
    );
  }, [todos, proTodos]);
  console.log(todos);
  return (
    <div className="container">
      {todoType === "personal" ? (
        <div className="todos-container">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                finished={todo.finished}
                id={todo.id}
              />
            ))
          ) : (
            <h3>Add some tasks</h3>
          )}
          {todos.some((todo) => todo.finished) && (
            <img
              src="/src/assets/Clear complete.svg"
              alt="clear completed"
              className="clear-btn"
              onClick={() => dispatch(deleteFinished())}
            />
          )}
        </div>
      ) : (
        <div className="todos-container">
          {proTodos.length > 0 ? (
            proTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                finished={todo.finished}
                id={todo.id}
              />
            ))
          ) : (
            <h3>Add some todos</h3>
          )}
          {proTodos.some((todo) => todo.finished) && (
            <img
              src="/src/assets/Clear complete.svg"
              alt="clear completed"
              className="clear-btn"
              onClick={() => dispatch(deleteFinished())}
            />
          )}
        </div>
      )}
    </div>
  );
}
