import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import './App.css';
import AddTask from './components/AddTask/AddTask';

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <div className='container'>
        <Header onAddTask={() => {setIsAddingTask(!isAddingTask)}} showAddTask={isAddingTask}></Header>
        {
          isAddingTask && <AddTask></AddTask> 
        }
        {
          tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : <h3>No pending task!</h3>
        }
      </div>
    </div>
  );
}

export default App;
