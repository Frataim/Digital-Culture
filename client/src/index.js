import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'


axios.defaults.withCredentials = true // куки отсылает на бэк
axios.defaults.baseURL = 'http://localhost:3001' // дляя аксиоса автоматически подставляет

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
