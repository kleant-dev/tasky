import { createContext, useContext, useReducer } from "react";

const TodosContext = createContext();

const initialState = {
  todoType: "personal",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "todos/setType":
      return { ...state, todoType: action.payload };
    case "todos/addTodo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "todos/finishTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: true };
          else return todo;
        }),
      };
    case "todos/reverseFinishTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: false };
          else return todo;
        }),
      };
    case "todos/deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "todos/deleteFinished":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.finished),
      };
  }
}

export default function TodosProvider({ children }) {
  const [{ todoType, todos }, dispatch] = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={{ todos, todoType, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const { todos, todoType, dispatch } = useContext(TodosContext);
  if (!todos) throw new Error("Used out of provider");
  return { todos, todoType, dispatch };
}
