import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const todoList = [
  {
    id: 1,
    text: "Hello, Welcome!",
    completed: false,
  },
  {
    id: new Date().getTime(),
    text: "todolist with react",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState([todoList]);

  return (
    <div className="container">
      <Header todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
