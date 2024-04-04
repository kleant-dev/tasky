import { createSlice } from "@reduxjs/toolkit";

const { personalTodos, proTodos } = JSON.parse(localStorage.getItem("todos"));
const initialState = {
  todoType: "personal",
  todos: personalTodos,
  proTodos: proTodos,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setType(state, action) {
      state.todoType = action.payload;
    },
    addTodo(state, action) {
      if (state.todoType === "personal") {
        state.todos.push(action.payload);
      } else {
        state.proTodos.push(action.payload);
      }
    },
    finishTodo(state, action) {
      if (state.todoType === "personal") {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: true };
          else return todo;
        });
      } else {
        state.proTodos = state.proTodos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: true };
          else return todo;
        });
      }
    },
    reverseFinishTodo(state, action) {
      if (state.todoType === "personal") {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: false };
          else return todo;
        });
      } else {
        state.proTodos = state.proTodos.map((todo) => {
          if (todo.id === action.payload) return { ...todo, finished: false };
          else return todo;
        });
      }
    },
    deleteTodo(state, action) {
      if (state.todoType === "personal") {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      } else {
        state.proTodos = state.proTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    },
    deleteFinished(state) {
      if (state.todoType === "personal") {
        state.todos = state.todos.filter((todo) => !todo.finished);
      } else {
        state.proTodos = state.proTodos.filter((todo) => !todo.finished);
      }
    },
  },
});

export default todosSlice.reducer;
export const {
  setType,
  addTodo,
  finishTodo,
  reverseFinishTodo,
  deleteTodo,
  deleteFinished,
} = todosSlice.actions;
