import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Library from "./chapter03/Library.jsx";
import Clock from "./craet-clock/Clock.jsx";

setInterval(()=>{
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Clock/>
        </React.StrictMode>,
    )
})
