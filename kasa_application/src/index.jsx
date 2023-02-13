import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/style/normalize.css'
import './utils/style/style.css'
import Router from './utils/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)
