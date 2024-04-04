import { useDispatch, useSelector } from "react-redux";
import { setType } from "./todosSlice";

function TodoType() {
  const dispatch = useDispatch();
  const { todoType } = useSelector((store) => store.todos);
  return (
    <div className="todo-type-container">
      <div
        onClick={() => dispatch(setType("personal"))}
        className={`todo-type ${todoType === "personal" ? "active" : ""}`}
      >
        Personal
      </div>
      <div
        onClick={() => dispatch(setType("professional"))}
        className={`todo-type ${todoType === "professional" ? "active" : ""}`}
      >
        Professional
      </div>
    </div>
  );
}

export default TodoType;
