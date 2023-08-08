import React from 'react'
import './Dashboard.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard
