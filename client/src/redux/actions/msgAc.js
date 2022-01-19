import {ALL_MSG } from "../types/chatTypes"

export const allMsg = () => (dispatch) => {
      console.log('YA action');
  fetch("http://localhost:3001/msgs")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ALL_MSG,
        payload: data,
      })
    )
}

