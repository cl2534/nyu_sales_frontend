import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/css/index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import reducer from './reducers/reducer'
import App from './App'
import usersReducer from './reducers/usersReducer'
import registerServiceWorker from './registerServiceWorker'
//
const rootReducer = combineReducers({ usersReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
