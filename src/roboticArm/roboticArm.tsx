import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import RoboticArmPage from './roboticArmPage.tsx';
import NavBar from '../../components/NavBar.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <RoboticArmPage/>
    </React.StrictMode>,
)