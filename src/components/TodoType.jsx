import { useTodos } from "../context/TodosContext";

function TodoType() {
  const { todoType, dispatch } = useTodos();
  return (
    <div className="todo-type-container">
      <div
        onClick={() => dispatch({ type: "todos/setType", payload: "personal" })}
        className={`todo-type ${todoType === "personal" ? "active" : ""}`}
      >
        Personal
      </div>
      <div
        onClick={() =>
          dispatch({ type: "todos/setType", payload: "professional" })
        }
        className={`todo-type ${todoType === "professional" ? "active" : ""}`}
      >
        Professional
      </div>
    </div>
  );
}

export default TodoType;
