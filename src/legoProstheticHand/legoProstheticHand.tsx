import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import LegoProsPage from './legoProsPage';
import NavBar from '../../components/NavBar';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <LegoProsPage/>
    </React.StrictMode>,
)
