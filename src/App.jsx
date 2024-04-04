import Form from "./components/Form";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";
import TodoType from "./components/TodoType";

function App() {
  return (
    <div className="app">
      <Logo />
      <TodoType />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
