import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Authentication/Signin/Signin';
import Signup from './components/Authentication/Signup/Signup';
import Signout from './components/Authentication/Signout/Signout'
import { checkUser } from './redux/actions/userAction';
import Header from './components/Header/Header'
import Greet from './components/Greet/Greet'
import Footer from './components/Footer/Footer'
import {Container} from '@mui/material'
import style from './App.module.css'
import CreateTask from "./components/TaskPage/CrateTask/CreateTask";



function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className={style.content}>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="/create" element={<CreateTask />} />
          {user ? <Route path="signout" element={<Signout />} /> :
            <Route path="signin" element={<Signin />} /> &&
            <Route path="signup" element={<Signup />} />
          }
          <Route path="tasks" element={<TaskPage />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App


