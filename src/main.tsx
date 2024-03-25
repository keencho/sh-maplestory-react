import React from 'react'
import ReactDOM from 'react-dom/client'
import {Core} from './core/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Core />
    </React.StrictMode>,
)
