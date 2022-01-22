import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { delUser } from '../../../redux/actions/userAction';


const Signout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  useEffect(() => {
    window.localStorage.clear()
    dispatch(delUser())
    navigate('/')
  }, [user])
  return (
    <h2></h2>
  );
}

export default Signout;
