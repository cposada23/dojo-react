import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {App, Nasa}  from './App'
ReactDOM.render(
    <div>
        <App />
        <Nasa />
    </div>, document.getElementById('root'))

registerServiceWorker()
 