import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import App from './App'
axios.defaults.withCredentials = true; // куки отсылает на бэк
axios.defaults.baseURL = 'http://localhost:3001'; // дляя аксиоса автоматически подставляет

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
