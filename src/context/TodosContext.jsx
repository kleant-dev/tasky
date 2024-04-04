import { createContext, useContext, useReducer } from "react";

const TodosContext = createContext();
const { personalTodos, proTodos } = JSON.parse(localStorage.getItem("todos"));
const initialState = {
  todoType: "personal",
  todos: personalTodos,
  proTodos: proTodos,
};

function reducer(state, action) {
  switch (action.type) {
    case "todos/setType":
      return { ...state, todoType: action.payload };
    case "todos/addTodo":
      if (state.todoType === "personal")
        return { ...state, todos: [...state.todos, action.payload] };
      else return { ...state, proTodos: [...state.proTodos, action.payload] };
    case "todos/finishTodo":
      if (state.todoType === "personal")
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) return { ...todo, finished: true };
            else return todo;
          }),
        };
      else
        return {
          ...state,
          proTodos: state.proTodos.map((todo) => {
            if (todo.id === action.payload) return { ...todo, finished: true };
            else return todo;
          }),
        };
    case "todos/reverseFinishTodo":
      if (state.todoType === "personal")
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) return { ...todo, finished: false };
            else return todo;
          }),
        };
      else
        return {
          ...state,
          proTodos: state.proTodos.map((todo) => {
            if (todo.id === action.payload) return { ...todo, finished: false };
            else return todo;
          }),
        };
    case "todos/deleteTodo":
      if (state.todoType === "personal")
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      else
        return {
          ...state,
          proTodos: state.proTodos.filter((todo) => todo.id !== action.payload),
        };
    case "todos/deleteFinished":
      if (state.todoType === "personal")
        return {
          ...state,
          todos: state.todos.filter((todo) => !todo.finished),
        };
      else
        return {
          ...state,
          proTodos: state.proTodos.filter((todo) => !todo.finished),
        };
  }
}

export default function TodosProvider({ children }) {
  const [{ todoType, todos, proTodos }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <TodosContext.Provider value={{ todos, todoType, proTodos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const { todos, proTodos, todoType, dispatch } = useContext(TodosContext);
  if (!todos) throw new Error("Used out of provider");
  return { todos, proTodos, todoType, dispatch };
}
