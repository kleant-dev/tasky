import Form from "./components/Form";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";
import TodoType from "./components/TodoType";
import TodosProvider from "./context/TodosContext";

function App() {
  return (
    <div className="app">
      <Logo />
      <TodosProvider>
        <TodoType />
        <Form />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
