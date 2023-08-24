import React from 'react'
import './Dashboard.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import SimpleTable from './components/Table/Table';

const Dashboard = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
                {/* <SimpleTable/> */}
                <RightSide/>
            </div>
        </div>
    )
}

export default Dashboard
