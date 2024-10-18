import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([])

  return (
    <div className="container" >
      <Header todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
