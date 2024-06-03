import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Library from "./chapter03/Library.jsx";
import Clock from "./craet-clock/Clock.jsx";
import CommentList from "./chapter05/CommentList.jsx";
import NotificationList from "./chapter06/NotificationList.jsx";
import Accommdate from "./chapter07/Accommodate.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Accommdate/>
    </React.StrictMode>,
);

