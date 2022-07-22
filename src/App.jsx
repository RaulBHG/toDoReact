import { TaskProvider } from './context/TaskState'

import TaskList from './components/TaskList'

import './App.css'

function App() {    
  
  return (
    <TaskProvider>
      <div className="App">
        <TaskList/>                
      </div>
    </TaskProvider>
  )
}

export default App
