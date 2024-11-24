import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

//* MARK: Hooks
import { useEffect, useState } from 'react';

function App() {
  //* MARK: State

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  const [isDarkMode, setIsDarkMode] = useState(false);

  //* MARK: Functions
  
  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    // update/edit
    let newTodoList = [...todos];
    let CompletedTodo = todos[index];
    CompletedTodo['complete'] = true;
    newTodoList[index] = CompletedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    // delete
    let newTodoList = todos.filter((val, valIndex) => {
      return index !== valIndex;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  }

  //* MARK: Effects

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return;
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? 'var(--background-primary, #05070f)'
      : 'var(--background-primary, white)';
    document.body.style.color = isDarkMode
      ? 'var(--color-primary, white)'
      : 'var(--color-primary, black)';
  }, [isDarkMode]);

  return (
    <>
      <button onClick={toggleDarkMode}> Switch to { isDarkMode ? 'Light' : 'Dark'} mode...
        {isDarkMode ? (
          <i className="fa-solid fa-toggle-on"></i>
        ) : (
          <i className="fa-solid fa-toggle-off"></i>
        )}{' '}
      </button>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
