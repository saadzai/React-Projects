import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/todocontext'
import './App.css'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo,
      ),
    )
  }

  useEffect(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
      if (Array.isArray(savedTodos) && savedTodos.length > 0) {
        setTodos(savedTodos)
      }
    } catch (error) {
      console.error('Failed to load todos from localStorage:', error)
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="todo-app">
        <div className="todo-card">
          <h1>My Todo List</h1>

          <TodoForm />

          {todos.length === 0 ? (
            <div className="empty-state">No tasks yet. Add one above.</div>
          ) : (
            <div className="todo-list">
              {todos.map((todo) => (
                <div key={todo.id} className="todo-item-wrap">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App