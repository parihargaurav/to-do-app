📘 Todo App – Frontend Machine Coding Practice
🧠 Problem Statement

Build a Todo Application with the following features:

Add a todo

Delete a todo

Toggle complete

Filter (All / Completed / Pending)

Persist data using localStorage

🎯 Objective

This project focuses on:

State management using React hooks

Immutability handling

Derived state logic

Side effects using useEffect

Clean communication during machine coding

Writing scalable frontend architecture

🏗 Approach (How to Explain in Interview)
Step 1: Requirement Clarification

I will build a Todo app supporting CRUD operations, filtering, and persistence.
I’ll start simple and refactor if needed.

Step 2: State Identification

We manage three main states:

todos   // Array of todo objects
text    // Input field value
filter  // Current filter state
Step 3: Core Functionalities
➕ Add Todo

Validate empty input

Create new todo object

Use functional state update

Maintain immutability

setTodos(prev => [...prev, newTodo])
✅ Toggle Todo

Use map() to update matching todo

Return new object

Preserve immutability

❌ Delete Todo

Use filter() to remove todo by id

🔎 Filtering Logic

Instead of storing filtered state:

const filteredTodos = todos.filter(...)

This avoids duplicate state and keeps logic clean.

Step 4: Persistence

Two effects:

Load todos on mount

Save todos whenever they change

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
