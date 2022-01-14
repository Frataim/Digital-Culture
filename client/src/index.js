import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import { store } from "./redux/store"
import { BrowserRouter } from "react-router-dom"

import { Route, Routes } from "react-router-dom"
import TaskPage from "./components/TaskPage/TaskPage"
import TasksList from "./components/TasksList/TasksList"
import axios from 'axios'


axios.defaults.withCredentials = true; // куки отсылает на бэк
axios.defaults.baseURL = 'http://localhost:3001'; // дляя аксиоса автоматически подставляет

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="tasks" element={<App />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
