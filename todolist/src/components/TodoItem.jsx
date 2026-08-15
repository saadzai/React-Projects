import React, { useState } from 'react'
import { useTodo } from '../contexts/todocontext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <input
        type="checkbox"
        className="todo-check"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`todo-text ${todo.completed ? 'done' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <div className="todo-actions">
        <button
          className="icon-btn"
          onClick={() => {
            if (todo.completed) return

            if (isTodoEditable) {
              editTodo()
            } else {
              setIsTodoEditable((prev) => !prev)
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? 'Save' : 'Edit'}
        </button>

        <button className="icon-btn delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem