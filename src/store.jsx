import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./components/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
