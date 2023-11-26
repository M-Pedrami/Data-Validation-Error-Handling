import {Route, Routes} from 'react-router-dom';
import Tasks from './components/Tasks'
import './App.css'

function App() {


  return (
    <Routes>  
      <Route path="/" element={<Tasks/>} />
      {/* <Route path="/tasks/create" element={<CreateTasks />} /> */}
    </Routes>
  )
}

export default App
