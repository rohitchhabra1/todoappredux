import { createStore } from 'redux'
import { TodoApp } from './Reducers'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(TodoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

