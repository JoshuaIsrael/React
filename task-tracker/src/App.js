import React, { useState } from 'react';
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import './App.css';

function App() {

  const [tasks, SetTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: 'Feb 5th at 2:30 PM',
        reminder: true
      },
      {
        id: 2,
        text: "Meeting at School",
        day: 'Feb 6th at 1:30 PM',
        reminder: true
      },
      {
        id: 3,
        text: "Grocery",
        day: 'Feb 5th at 2:30 PM',
        reminder: false
      }
    ]
  );

  // Delete Task
  const deleteTask = (id) => {
    SetTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    SetTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        {
          tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : <h3>No pending task!</h3>
        }
      </div>
    </div>
  );
}

export default App;
