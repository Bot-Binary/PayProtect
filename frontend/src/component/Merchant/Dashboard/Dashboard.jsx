import React from 'react'
import './Dashboard.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { useLocation } from 'react-router-dom';

const MerchantDashboard = () => {

    const location = useLocation();
    console.log(location.state)

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

export default MerchantDashboard
