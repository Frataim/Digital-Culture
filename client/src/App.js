import { Route, Routes } from "react-router-dom"
import "./App.css"
import TaskPage from "./components/TaskPage/TaskPage"
import TasksList from "./components/TasksList/TasksList"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Authentication/Signin/Signin';
import Signup from './components/Authentication/Signup/Signup';
import Signout from './components/Authentication/Signout/Signout';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';
import { checkUser } from './redux/actions/userAction';


function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {user && <Route path='/' element={
          <>
          </>}
        />}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signout" element={<Signout />} />
      </Routes>
    </>
  );
}

export default App
