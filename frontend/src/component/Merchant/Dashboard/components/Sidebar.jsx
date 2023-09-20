import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import {
    UilEstate,
    UilHistory,
    UilLock,
    UilSetting,
    UilSignOutAlt
  } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mpinmodal from "./Modal/Mpinmodal"

const Sidebar = () => {
    const [selected, setSelected] = useState("Dashboard");

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    
    return (
        <>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                <UilBars />
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span>
                        <span>P</span>ay
                        <br></br><span> P</span>rotect
                    </span>
                </div>

                <div className="menu">
                    {/* {SidebarData.map((item, index) => {
                        return ( */}
                            <div className={selected === "Dashboard" ? "menuItem active" : "menuItem"}>
                                <UilEstate/>
                                <Link to="/" ><span>Dashboard</span></Link>    
                            </div>

                            <div className={selected === "History" ? "menuItem active" : "menuItem"}>
                                <UilHistory/>
                                <Link to="/" ><span>History</span></Link>
                            </div>

                            <div className={selected === "Settings" ? "menuItem active" : "menuItem"}>
                                <UilSetting/>
                                <Link to="/" ><span>Settings</span></Link>
                            </div>

                            <div className={selected === "Mpin" ? "menuItem active" : "menuItem"}>
                                <UilLock/>
                                {/* <Link to="/" ><span>M-Pin</span></Link> */}
                                <Mpinmodal/>
                            </div>


                        {/* );
                    })} */}
                    {/* signoutIcon */}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
