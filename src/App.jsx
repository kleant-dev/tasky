import Form from "./components/Form";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div class="app">
      <Logo />
      <div className="todo-type-container">
        <div className="todo-type active">Personal</div>
        <div className="todo-type">Professional</div>
      </div>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
