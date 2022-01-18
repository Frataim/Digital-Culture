import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect } from "react"
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
import CommentForm from "./components/TaskPage/CommentForm/CommentForm"
import UserProfile from "./components/UserProfile/UserProfile"
import EditUserProfile from "./components/UserProfile/EditUserProfile"
import Chat from "./components/Chat/Chat"
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

  return (
    <div className={style.content}>
      <Container>
        <Header />

        <Routes>
          <Route path="chat" element={<Chat />} />

          <Route path="/" element={<Greet />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/commentCreateTest" element={<CommentForm />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="edit" element={<EditUserProfile />} />

          {user ? (
            <Route path="signout" element={<Signout />} />
          ) : (
            <Route path="signin" element={<Signin />} /> && <Route path="signup" element={<Signup />} />
          )}
          <Route path="tasks" element={<TaskPage />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  )
}

export default App
