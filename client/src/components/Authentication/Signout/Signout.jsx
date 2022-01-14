import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { delUser } from '../../../redux/actions/userAction';
// import { signOut } from '../../../redux/sagas/userSaga';


const Signout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // window.localStorage.clear()
    dispatch(delUser())
    navigate('/')
  }, [])
  return (
    <h2></h2>
  );
}

export default Signout;
