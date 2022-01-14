import { Route, Routes} from "react-router-dom"
import "./App.css"
import TaskPage from "./components/TaskPage/TaskPage"
import TasksList from "./components/TasksList/TasksList"

function App() {
  return (
    <div className="App">
      <TasksList />
      {/* <Routes>
      
          <Route path="tasks" element={<TasksList/>}>
            <Route path=":id" element={<TaskPage />} />
  
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
