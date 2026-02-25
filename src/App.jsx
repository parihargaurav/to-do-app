import { useEffect, useState } from "react";

function App() {
  // store all todos
  const [todos, setTodos] = useState([]);

  // store input value
  const [text, setText] = useState("");

  // store filter state 
  const [filter, setFilter] = useState("all");

  // implementing add functionality
  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };
  // add toggle functionality

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  //  add delete function
  const deleteTodo = (id) => {
    setTodos((prev) => {
      prev.filter((todo) => todo.id !== id)
    })
  }


  // add filtering logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;

  });

  // add localStorage persistence

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  //  save whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}

    </div>
  )


}

export default App;