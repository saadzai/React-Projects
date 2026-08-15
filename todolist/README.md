# Todo List App

This is a simple React project for managing daily tasks.

It helps you:
- add new tasks
- mark tasks as completed
- edit existing tasks
- delete tasks
- keep tasks saved in the browser using local storage

This project is perfect for beginners who are learning React and basic state management.

## Features

- Add a todo item
- Check or uncheck a task as complete
- Update a task text
- Remove a task from the list
- Automatically save tasks in the browser

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS

## Project Structure

```bash
todolist/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   ├── contexts/
│   │   └── todocontext.js
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## How to Run This Project

1. Open your terminal.
2. Go to the project folder:

```bash
cd todolist
```

3. Install dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm run dev
```

5. Open the local address shown in the terminal, usually:

```bash
http://localhost:5173/
```

## How It Works

The app uses React state to store the todo list.

- When you type in the input box and click Add, a new todo is created.
- The list is updated immediately in the UI.
- Every change is saved in localStorage, so the tasks stay even after refreshing the page.

## Beginner Notes

This project is a great example of:
- React components
- useState
- useEffect
- props
- event handling
- context API

## Future Improvements

You can add features like:
- clear completed tasks
- filter tasks (all, active, completed)
- dark mode
- task priority
- date and time for each task

## License

This project is for learning purposes.
