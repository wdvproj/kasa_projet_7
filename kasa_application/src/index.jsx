import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/style/style.css'
import { DatasProvider } from './utils/context'
import Router from './utils/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <DatasProvider>
            <Router />
        </DatasProvider>
    </React.StrictMode>
)
