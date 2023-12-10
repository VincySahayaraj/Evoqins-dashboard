import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import './managedomains.css';
import { Container } from 'react-bootstrap';
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";


const ManageDomain = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
return(
    <>
    <div className='custom-container'>
    <div className='mt-200'>
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : "tab1"}
          onClick={handleTab1}
        >
          <p>Web 2.0</p>
        </li>
        <li
          className={activeTab === "tab2" ? "active" : "tab2"}
          onClick={handleTab2}
        >
          <p>Web 3.0</p>
        </li>
      </ul>
    </div>
    <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  
    </div>

    </>
)
}

export default ManageDomain;