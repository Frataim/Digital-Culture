import axios from 'axios'
import { ADD_USER } from "../types/userTypes"



// получаем данные из сервера
const fetchUser = () => {
  return axios.get('/users').then((res) => res.data)
}

// это функция внутри нее выполняется асинхронная логика
function* userSagaWorker() {
  try {
    const User = yield call(fetchUser)
    console.log(User)
    yield put(addUserAction(User))
  } catch (error) {
    yield put({type: ADD_USER , payload: [{id: 1, word: "Error"}]})
    
  }
}

// takeEvery - для создания новой саги и для выполнения операции (подписка)
// функция наблюдатель ждет когда отработает тот или иной action
export function* userSagaWatcher() {
  yield takeEvery(ADD_USER, userSagaWorker)
}
