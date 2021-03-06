import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Signin from "./components/Authentication/Signin/Signin"
import Signup from "./components/Authentication/Signup/Signup"
import Signout from "./components/Authentication/Signout/Signout"
import { checkUser, delUser } from "./redux/actions/userAction"
import Header from "./components/Header/Header"
import Greet from "./components/Greet/Greet"
import Footer from "./components/Footer/Footer"
import { Container } from "@mui/material"
import style from "./App.module.css"
import CreateTask from "./components/TaskPage/CrateTask/CreateTask"
import { allTasks } from "./redux/actions/tasksAc"
import { getAllUsers } from "./redux/actions/usersAc"
import UserProfile from "./components/UserProfile/UserProfile"
import EditUserProfile from "./components/UserProfile/EditUserProfile"
import { allComments } from "./redux/actions/commentsAc"
import { allFeedbacks } from "./redux/actions/feedbacksAc"
import CurrentTask from "./components/TaskPage/TaskList/CurrentTask/CurrentTask"
import Workers from "./components/Workers/Workers"
import Chat from "./components/Chat/Chat"
import { allMsg } from "./redux/actions/msgAc"
import CurrentWorker from "./components/Workers/CurrentWorker/CurrentWorker"
import Test from "./components/Test/Test"

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(checkUser())
  }, [])

  useEffect(() => {
    dispatch(allTasks())
  }, [])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    dispatch(allComments())
  }, [])

  useEffect(() => {
    dispatch(allFeedbacks())
  }, [])
  useEffect(() => {
    dispatch(allMsg())
  }, [])

  const [location, setLocation] = useState(window.location.pathname)


  return (
    <div className={style.content}>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/commentCreateTest" element={<Test />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="tasks/:id" element={<CurrentTask />} />
          {user ? (
            <Route path="signout" element={<Signout />} />
          ) : (
            <Route path="signin" element={<Signin />} /> && <Route path="signup" element={<Signup />} />
          )}
          <Route path="workers" element={<Workers />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path='workers/:id' element={<CurrentWorker />}></Route>
        </Routes>
        <Footer />
      </Container>
    </div>
  )
}

export default App
