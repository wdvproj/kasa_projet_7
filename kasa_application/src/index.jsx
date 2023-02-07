import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/style/style.css'
import Router from './utils/router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)
