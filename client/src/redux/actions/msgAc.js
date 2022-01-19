import axios from "axios"
import {ALL_MSG } from "../types/chatTypes"

export const allMsg = () => (dispatch) => {
  fetch("http://localhost:3001/comment")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ALL_MSG,
        payload: data,
      })
    )
}
