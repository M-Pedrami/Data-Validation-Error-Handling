import {NavLink, Route, Routes} from 'react-router-dom';
import Tasks from './components/Tasks'
import CreateTasks  from './components/CreateTasks';
import './App.css'
import { useState } from 'react';

function App() {
  const [task, setTask] = useState({});

  return (
    <>
    <nav>
      <NavLink to="/tasks/create"> Add a new Task</NavLink>
    </nav>
    <Routes>  
      <Route path="/" element={<Tasks task={task}/>} />
      <Route path="/tasks/create" element={<CreateTasks setTask={setTask} />} />
    </Routes>
    </>
  )
}

export default App
